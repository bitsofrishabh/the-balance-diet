import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID; // Your Brevo contact list ID

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Add contact to Brevo list
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: BREVO_LIST_ID ? [parseInt(BREVO_LIST_ID)] : undefined,
        attributes: {
          FIRSTNAME: '', // Can be updated if you collect names
          LASTNAME: '',
          SOURCE: 'Website Footer - Recipe E-book',
          SUBSCRIPTION_DATE: new Date().toISOString(),
        },
        updateEnabled: true, // Update contact if already exists
      }),
    });

    const brevoData = await brevoResponse.json();

    if (!brevoResponse.ok) {
      // Handle case where contact already exists
      if (brevoResponse.status === 400 && brevoData.code === 'duplicate_parameter') {
        console.log('Contact already exists, updating...');
        // Contact already exists, that's fine
      } else {
        console.error('Brevo API error:', brevoData);
        return NextResponse.json(
          { error: 'Failed to subscribe. Please try again.' },
          { status: 500 }
        );
      }
    }

    // Send welcome email with recipe e-book (optional)
    // You can create a transactional email template in Brevo and send it here
    if (process.env.BREVO_TEMPLATE_ID) {
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify({
            templateId: parseInt(process.env.BREVO_TEMPLATE_ID),
            to: [{ email: email }],
            params: {
              EMAIL: email,
              DOWNLOAD_LINK: process.env.RECIPE_EBOOK_URL || '#',
            },
          }),
        });
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the subscription if email sending fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for the recipe e-book.',
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}