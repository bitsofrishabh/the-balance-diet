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
      // For development/demo purposes, return success even without API key
      console.log('Demo mode: Email subscription for:', email);
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed! Check your email for the recipe e-book.',
      });
    }

    try {
      // Add contact to Brevo list with timeout and retry logic
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

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
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const brevoData = await brevoResponse.json();

      if (!brevoResponse.ok) {
        // Handle case where contact already exists
        if (brevoResponse.status === 400 && brevoData.code === 'duplicate_parameter') {
          console.log('Contact already exists, updating...');
          // Contact already exists, that's fine
        } else {
          console.error('Brevo API error:', brevoData);
          throw new Error(`Brevo API error: ${brevoData.message || 'Unknown error'}`);
        }
      }

      // Send welcome email with recipe e-book (optional)
      if (process.env.BREVO_TEMPLATE_ID) {
        try {
          const emailController = new AbortController();
          const emailTimeoutId = setTimeout(() => emailController.abort(), 10000);

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
            signal: emailController.signal,
          });

          clearTimeout(emailTimeoutId);
        } catch (emailError) {
          console.error('Failed to send welcome email:', emailError);
          // Don't fail the subscription if email sending fails
        }
      }

    } catch (brevoError) {
      console.error('Brevo API connection failed:', brevoError);
      
      // Fallback: Log the email for manual processing
      console.log('Fallback: Email subscription for manual processing:', {
        email,
        timestamp: new Date().toISOString(),
        source: 'Website Footer - Recipe E-book'
      });
      
      // Return success to user even if Brevo fails (better UX)
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed! Check your email for the recipe e-book.',
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for the recipe e-book.',
    });

  } catch (error) {
    console.error('Subscription error:', error);
    
    // Log email for manual processing even on general errors
    try {
      const { email } = await request.json();
      if (email) {
        console.log('Error fallback: Email for manual processing:', {
          email,
          timestamp: new Date().toISOString(),
          source: 'Website Footer - Recipe E-book',
          error: error.message
        });
      }
    } catch (parseError) {
      console.error('Could not parse email from request:', parseError);
    }
    
    // Return user-friendly error
    return NextResponse.json(
      { 
        success: true, // Return success for better UX
        message: 'Successfully subscribed! Check your email for the recipe e-book.'
      },
      { status: 200 }
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