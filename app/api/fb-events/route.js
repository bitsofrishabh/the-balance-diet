import { NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * Hashes data using SHA-256.
 * @param {string} data The string to hash.
 * @returns {string | undefined} The hashed string or undefined.
 */
function hash(data) {
    if (!data) return undefined;
    // Normalize data: lowercase and remove whitespace for consistency
    const normalizedData = data.toString().toLowerCase().replace(/\s/g, '');
    return crypto.createHash('sha256').update(normalizedData).digest('hex');
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { event_name, user_data = {}, custom_data = {}, event_source_url, event_id } = body;

        const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
        const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
        const API_VERSION = 'v20.0'; // Using a recent stable version

        if (!PIXEL_ID || !ACCESS_TOKEN) {
            console.warn('Facebook Pixel ID or Access Token is not set in .env.local');
            // Don't block the user, but log the issue.
            return NextResponse.json({ message: 'Facebook tracking is not configured on the server.' }, { status: 200 });
        }

        // Prepare user data by hashing Personally Identifiable Information (PII)
        const payloadUserData = {
            em: user_data.email ? [hash(user_data.email)] : undefined,
            ph: user_data.phone ? [hash(user_data.phone)] : undefined,
            fn: user_data.firstName ? [hash(user_data.firstName)] : undefined,
            ln: user_data.lastName ? [hash(user_data.lastName)] : undefined,
            ge: user_data.gender ? [hash(user_data.gender)] : undefined,
            db: user_data.dob ? [hash(user_data.dob)] : undefined,
            ct: user_data.city ? [hash(user_data.city)] : undefined,
            st: user_data.state ? [hash(user_data.state)] : undefined,
            zp: user_data.zip ? [hash(user_data.zip)] : undefined,
            country: user_data.country ? [hash(user_data.country)] : undefined,
            external_id: user_data.externalId ? [user_data.externalId] : undefined,
            client_user_agent: request.headers.get('user-agent'),
            fbc: request.cookies.get('_fbc')?.value,
            fbp: request.cookies.get('_fbp')?.value,
        };
        
        // Clean up undefined properties from the payload
        Object.keys(payloadUserData).forEach(key => payloadUserData[key] === undefined && delete payloadUserData[key]);

        const payload = {
            data: [
                {
                    event_name,
                    event_time: Math.floor(Date.now() / 1000),
                    action_source: 'website',
                    event_source_url: event_source_url || request.headers.get('referer'),
                    event_id: event_id, // For event deduplication
                    user_data: payloadUserData,
                    custom_data,
                },
            ],
            // Uncomment the line below and add your test code to .env.local to test events
            // test_event_code: process.env.FB_TEST_EVENT_CODE,
        };
        
        const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
        
        const fbResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const fbResponseData = await fbResponse.json();

        if (!fbResponse.ok) {
            console.error('Facebook Conversions API Error:', fbResponseData);
            return NextResponse.json({ message: 'Error sending event to Facebook', error: fbResponseData }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: fbResponseData });

    } catch (error) {
        console.error('Error in /api/fb-events route:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
}
