// This file contains helpers for Facebook Pixel and Conversions API events.

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

/**
 * Triggers a standard PageView event for the Meta Pixel.
 * This is used for tracking page visits on the client-side.
 */
export const pageview = () => {
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

/**
 * Triggers a standard or custom event for the Meta Pixel on the client-side.
 * @param {string} name The name of the event (e.g., 'ViewContent', 'Purchase').
 * @param {object} options Additional parameters for the event.
 */
export const event = (name, options = {}) => {
  if (window.fbq) {
    window.fbq('track', name, options);
  }
};

/**
 * Sends an event to the server-side API route, which then forwards it
 * to the Facebook Conversions API securely.
 * @param {string} eventName The name of the server-side event.
 * @param {object} data The data payload for the event.
 * @param {object} data.userData User-specific data (e.g., email, phone).
 * @param {object} data.customData Custom data for the event (e.g., value, currency).
 * @param {string} data.eventId A unique ID for deduplication.
 */
export const serverEvent = async (eventName, data = {}) => {
    const { userData = {}, customData = {}, eventId } = data;

    try {
        await fetch('/api/fb-events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_name: eventName,
                user_data: userData,
                custom_data: customData,
                event_source_url: window.location.href,
                event_id: eventId,
            }),
        });
    } catch (error) {
        console.error('Failed to send server-side event:', error);
    }
};
