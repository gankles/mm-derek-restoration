# 🚀 Quick Start Guide - Email Setup

## ⚡ TO GET EMAILS WORKING NOW (2 Minutes!)

### Step 1: Get Your Resend API Key
1. Go to https://resend.com/signup
2. Sign up with: **mmrestorationoffice@gmail.com**
3. Verify your email
4. Go to https://resend.com/api-keys
5. Click "Create API Key"
6. Copy the key (starts with `re_`)

### Step 2: Add Your API Key
1. Open `.env.local` file in the project root
2. Replace this line:
   ```
   RESEND_API_KEY=re_123456789_placeholder
   ```
   With your actual key:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
3. Save the file

### Step 3: Restart Server
```bash
# Stop the server (Ctrl+C)
npm run dev
```

### Step 4: Test!
1. Go to http://localhost:3000/contact
2. Fill out and submit the form
3. Check **mmrestorationoffice@gmail.com** for the email! 📧

---

## ✅ What's Already Configured

The `.env.local` file is already set up with:
- ✅ Email service: Resend
- ✅ Send TO: mmrestorationoffice@gmail.com
- ✅ Send FROM: onboarding@resend.dev
- ⚠️ API Key: **YOU NEED TO ADD THIS**

---

## 🆓 Alternative: Web3Forms (Even Easier!)

If you prefer, use Web3Forms instead (unlimited free):

1. Go to https://web3forms.com/
2. Enter: **mmrestorationoffice@gmail.com**
3. Get your access key from email
4. Update `.env.local`:
   ```
   EMAIL_SERVICE=web3forms
   WEB3FORMS_ACCESS_KEY=your_key_here
   ```
5. Done! No API key needed!

---

## 🐛 Troubleshooting

### "Application error" when submitting form
- **Cause:** No API key set or invalid key
- **Fix:** Make sure you added your real Resend API key to `.env.local`
- **Restart:** Always restart server after changing `.env.local`

### "Email not received"
- **Check spam folder** in mmrestorationoffice@gmail.com
- Verify API key is correct in `.env.local`
- Check server console for error messages

### "403 validation_error"
- **Cause:** Using wrong email or unverified domain
- **Fix:** Make sure `RESEND_TO_EMAIL=mmrestorationoffice@gmail.com`
- This is the email you signed up with on Resend

---

## 📧 Current Configuration

**Sending emails TO:** mmrestorationoffice@gmail.com
**Sending emails FROM:** onboarding@resend.dev (Resend's test address)

When form is submitted, you'll get a beautifully formatted email with:
- ✅ Customer contact info
- ✅ Service type
- ✅ Damage description
- ✅ Emergency flag (if checked)
- ✅ Timestamp

---

## 🎯 Next Steps (After Email Works)

### To Send From Your Own Domain:
1. Go to https://resend.com/domains
2. Add domain: `mm-restoration.com`
3. Add DNS records they provide
4. Wait for verification
5. Update `.env.local`:
   ```
   RESEND_FROM_EMAIL=noreply@mm-restoration.com
   ```

---

Need help? Check the full guide in `EMAIL_SETUP.md`
