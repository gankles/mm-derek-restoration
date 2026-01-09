// Simple test script to verify Resend API key works
const { Resend } = require('resend');
const fs = require('fs');

// Manually load environment variables from .env.local
const envContent = fs.readFileSync('.env.local', 'utf-8');
const envLines = envContent.split('\n');
envLines.forEach(line => {
  const match = line.match(/^([^#][^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    const value = match[2].trim();
    process.env[key] = value;
  }
});

async function testResend() {
  console.log('Testing Resend API...\n');

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  console.log('Configuration:');
  console.log('- API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET');
  console.log('- From:', fromEmail);
  console.log('- To:', toEmail);
  console.log('');

  if (!apiKey) {
    console.error('ERROR: RESEND_API_KEY not found in environment');
    process.exit(1);
  }

  const resend = new Resend(apiKey);

  try {
    console.log('Sending test email...');
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: 'Test Email from M&M Restoration Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Test Email</h1>
          </div>
          <div style="padding: 30px; background-color: #f9fafb;">
            <h2>Contact Form Test Submission</h2>
            <p><strong>Name:</strong> John Test</p>
            <p><strong>Phone:</strong> 517-555-1234</p>
            <p><strong>Email:</strong> test@example.com</p>
            <p><strong>Address:</strong> 123 Test Street, Lansing, MI</p>
            <p><strong>Service Type:</strong> Water Damage</p>
            <p><strong>Description:</strong> This is a test submission from the contact form to verify email notifications are working correctly.</p>
            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              Test submitted at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
Test Email - Contact Form Submission

Contact Information:
- Name: John Test
- Phone: 517-555-1234
- Email: test@example.com
- Address: 123 Test Street, Lansing, MI

Service Details:
- Type: Water Damage
- Description: This is a test submission from the contact form to verify email notifications are working correctly.

Submitted: ${new Date().toLocaleString()}
      `,
    });

    if (error) {
      console.error('\nERROR sending email:');
      console.error(error);
      process.exit(1);
    }

    console.log('\nSUCCESS! Email sent successfully.');
    console.log('Response data:', data);
    console.log('\nCheck your inbox at:', toEmail);

  } catch (error) {
    console.error('\nEXCEPTION occurred:');
    console.error(error);
    process.exit(1);
  }
}

testResend();
