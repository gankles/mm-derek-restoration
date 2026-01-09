'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  phone: z.string().min(10, 'Valid phone number is required').regex(/^[\d\s\-\(\)]+$/, 'Invalid phone format'),
  email: z.string().email('Valid email is required').optional().or(z.literal('')),
  address: z.string().min(5, 'Property address is required').max(200),
  serviceType: z.string().min(1, 'Please select a service type'),
  description: z.string().min(10, 'Please provide more details (at least 10 characters)').max(1000),
  emergency: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Email sending function with multiple service support
async function sendEmailNotification(data: ContactFormData) {
  const emailService = process.env.EMAIL_SERVICE || 'resend';

  // Format email content
  const subject = `${data.emergency ? '🚨 EMERGENCY' : '📋 New'} Service Request - ${data.serviceType}`;
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: ${data.emergency ? '#dc2626' : '#059669'}; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">${data.emergency ? '🚨 EMERGENCY REQUEST' : '📋 New Service Request'}</h1>
      </div>

      <div style="padding: 30px; background-color: #f9fafb;">
        <h2 style="color: #1e293b; margin-top: 0;">Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Name:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
            <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${data.phone}">${data.phone}</a></td>
          </tr>
          ${data.email ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
            <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Address:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.address}</td>
          </tr>
        </table>

        <h2 style="color: #1e293b; margin-top: 30px;">Service Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service Type:</td>
            <td style="padding: 8px 0; color: #1e293b; text-transform: capitalize;">${data.serviceType.replace('-', ' ')}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">Description:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.description}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Emergency:</td>
            <td style="padding: 8px 0; color: ${data.emergency ? '#dc2626' : '#059669'}; font-weight: bold;">
              ${data.emergency ? '⚠️ YES - IMMEDIATE ATTENTION REQUIRED' : 'No'}
            </td>
          </tr>
        </table>

        ${data.emergency ? `
        <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 15px; margin-top: 20px;">
          <p style="margin: 0; color: #991b1b; font-weight: bold;">
            ⚡ This is an emergency request. Contact the customer immediately!
          </p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
          <p>Submitted from M&M Restoration website contact form</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  `;

  const textContent = `
${data.emergency ? '🚨 EMERGENCY REQUEST' : 'New Service Request'}

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Phone: ${data.phone}
${data.email ? `- Email: ${data.email}` : ''}
- Address: ${data.address}

Service Details:
- Type: ${data.serviceType}
- Description: ${data.description}
- Emergency: ${data.emergency ? 'YES - IMMEDIATE ATTENTION REQUIRED' : 'No'}

Submitted: ${new Date().toLocaleString()}
  `;

  if (emailService === 'resend' && resend) {
    // Option 1: Resend (recommended)
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.RESEND_TO_EMAIL || process.env.BUSINESS_EMAIL || 'contact@mm-restoration.com'],
      subject: subject,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      throw new Error(`Resend error: ${error.message}`);
    }

    console.log('Email sent via Resend:', emailData);
  } else if (emailService === 'web3forms' && process.env.WEB3FORMS_ACCESS_KEY) {
    // Option 2: Web3Forms (free unlimited alternative)
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY);
    formData.append('subject', subject);
    formData.append('from_name', `${data.firstName} ${data.lastName}`);
    formData.append('email', data.email || 'noreply@mm-restoration.com');
    formData.append('message', textContent);
    formData.append('phone', data.phone);
    formData.append('address', data.address);
    formData.append('service_type', data.serviceType);
    formData.append('emergency', data.emergency ? 'yes' : 'no');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(`Web3Forms error: ${result.message}`);
    }

    console.log('Email sent via Web3Forms:', result);
  } else {
    // No email service configured - this is actually okay for testing
    console.warn('No email service configured. Form data received:');
    console.log('Form data:', data);
    // Don't throw error - form still works, just no email sent
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    // Parse and validate form data
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: formData.get('email') || '',
      address: formData.get('address'),
      serviceType: formData.get('serviceType'),
      description: formData.get('description'),
      emergency: formData.get('emergency') === 'on',
    };

    const validatedData = contactFormSchema.parse(data);

    // Send email notification
    try {
      await sendEmailNotification(validatedData);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);

      // Return error to user - don't silently fail!
      return {
        success: false,
        message: 'We had trouble submitting your request. Please call us directly at (616) 648-7775 for immediate assistance.'
      };
    }

    // In production, you should also:
    // 1. Store in database
    // 2. Integrate with CRM
    // 3. Send confirmation email to customer

    return {
      success: true,
      message: validatedData.emergency
        ? 'Emergency request received! Our team will contact you immediately.'
        : 'Thank you! We will contact you within 24 hours with your free estimate.'
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: 'Please check the form for errors.'
      };
    }

    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again or call us directly at (616) 648-7775.'
    };
  }
}
