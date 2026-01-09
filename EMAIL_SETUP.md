# Email Notification Setup Guide

Your contact form is now configured to send email notifications when customers submit inquiries. You have **two free options** to choose from:

## Option 1: Resend (Recommended) ⭐
**Free Tier:** 3,000 emails/month

### Setup Steps:
1. Go to https://resend.com/signup
2. Create a free account
3. Verify your email
4. Go to "API Keys" and create a new API key
5. Create a `.env.local` file in your project root
6. Add these variables:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
EMAIL_SERVICE=resend
```

### With Custom Domain (Optional):
If you want emails to come from your domain (e.g., contact@mm-restoration.com):
1. In Resend dashboard, go to "Domains"
2. Add your domain
3. Add the DNS records they provide to your domain registrar
4. Once verified, update:
```env
RESEND_FROM_EMAIL=contact@mm-restoration.com
```

---

## Option 2: Web3Forms (Unlimited Free) 🆓
**Free Tier:** Unlimited emails forever!

### Setup Steps:
1. Go to https://web3forms.com/
2. Enter your email address
3. You'll receive an access key via email
4. Create a `.env.local` file in your project root
5. Add these variables:

```env
WEB3FORMS_ACCESS_KEY=your_access_key_here
EMAIL_SERVICE=web3forms
```

That's it! Web3Forms will send form submissions to the email you signed up with.

---

## Testing Your Setup

1. Start your development server:
```bash
npm run dev
```

2. Navigate to http://localhost:3000/contact

3. Fill out and submit the contact form

4. Check your email! You should receive a nicely formatted notification with:
   - Customer contact info (name, phone, email, address)
   - Service type and description
   - Emergency status highlighted
   - Timestamp of submission

### Email Preview:
- **Regular Request:** Green header with 📋 icon
- **Emergency Request:** Red header with 🚨 icon and urgent warning

---

## Email Features

✅ **Beautiful HTML Emails** - Professional design with your brand colors
✅ **Plain Text Fallback** - Works in all email clients
✅ **Emergency Highlighting** - Red alerts for urgent requests
✅ **Clickable Contact Info** - Phone and email links
✅ **Timestamp** - Know exactly when the request came in
✅ **Mobile Responsive** - Looks great on all devices

---

## Troubleshooting

### "Email not sending"
1. Check your `.env.local` file exists in project root
2. Make sure API keys are correct (no spaces/typos)
3. Restart your dev server after changing `.env.local`
4. Check console for error messages

### "Can't receive emails"
- **Resend:** Make sure RESEND_TO_EMAIL is set to your email
- **Web3Forms:** Check spam folder, verify your access key

### "Need to change email service"
Just change `EMAIL_SERVICE` in `.env.local`:
```env
EMAIL_SERVICE=resend  # or web3forms
```

---

## Production Deployment

### Vercel / Netlify / Railway:
Add environment variables in your hosting dashboard:
- Go to project settings → Environment Variables
- Add all the variables from your `.env.local`
- Redeploy your site

### Important:
- Never commit `.env.local` to git (it's already in .gitignore)
- Keep your API keys secret
- Use different API keys for development and production

---

## Cost Comparison

| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **Resend** | 3,000/month | From $20/month | Growing businesses |
| **Web3Forms** | Unlimited | None needed | Small businesses |

Both are excellent free options! Start with whichever is easiest for you.

---

## Next Steps

Want to enhance your form even more? Consider:
1. **Database Storage** - Save submissions to a database
2. **Customer Confirmation** - Send auto-reply to customers
3. **CRM Integration** - Connect to Salesforce, HubSpot, etc.
4. **SMS Notifications** - Get texts for emergency requests
5. **Slack Integration** - Notify your team in real-time

Need help? Check the documentation:
- Resend: https://resend.com/docs
- Web3Forms: https://docs.web3forms.com/
