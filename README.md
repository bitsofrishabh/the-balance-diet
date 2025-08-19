the-balance-diet

## Environment Setup

### Brevo Email Integration

To set up email subscriptions with Brevo:

1. **Get Brevo API Key:**
   - Go to [Brevo Dashboard](https://app.brevo.com/)
   - Navigate to Account > SMTP & API > API Keys
   - Create a new API key and copy it

2. **Get Contact List ID:**
   - Go to Contacts > Lists in your Brevo dashboard
   - Create a new list or use existing one
   - Copy the List ID (number)

3. **Optional - Email Template:**
   - Go to Campaigns > Templates
   - Create a transactional email template for the recipe e-book
   - Copy the Template ID

4. **Update Environment Variables:**
   ```bash
   BREVO_API_KEY=your_api_key_here
   BREVO_LIST_ID=your_list_id_here
   BREVO_TEMPLATE_ID=your_template_id_here (optional)
   RECIPE_EBOOK_URL=https://your-domain.com/recipe-ebook.pdf (optional)
   ```

### Features:
- ✅ Adds contacts to your Brevo list
- ✅ Handles duplicate contacts gracefully
- ✅ Optional automated welcome email
- ✅ Tracks subscription source
- ✅ Error handling and validation
- ✅ Fallback logging for manual processing
- ✅ Network timeout protection
- ✅ Demo mode when API key not configured

### Troubleshooting:

**Network Errors:**
- Check that BREVO_API_KEY is correctly set in .env.local
- Verify API key is active in Brevo dashboard
- Ensure BREVO_LIST_ID is a valid number
- Check network connectivity to api.brevo.com

**Demo Mode:**
- If no API key is configured, the system runs in demo mode
- Emails are logged to console for manual processing
- Users still receive success messages for better UX
