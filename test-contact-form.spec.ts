import { test, expect } from '@playwright/test';

test('Contact Form Test with Resend API', async ({ page }) => {
  // Navigate to contact page
  console.log('Navigating to contact page...');
  await page.goto('http://localhost:3000/contact');

  // Wait for page to fully load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Take initial screenshot
  console.log('Taking initial screenshot...');
  await page.screenshot({ path: 'contact-form-initial.png', fullPage: true });

  // Fill out the form
  console.log('Filling out form...');
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Test');
  await page.fill('input[name="phone"]', '517-555-1234');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="address"]', '123 Test Street, Lansing, MI');

  // Select service type
  await page.selectOption('select[name="serviceType"]', 'water-damage');

  // Fill description
  await page.fill('textarea[name="description"]', 'This is a test submission from the contact form to verify email notifications are working correctly.');

  // Take screenshot before submission
  await page.screenshot({ path: 'contact-form-filled.png', fullPage: true });

  // Listen for console messages
  const consoleMessages: string[] = [];
  page.on('console', msg => {
    consoleMessages.push(`${msg.type()}: ${msg.text()}`);
    console.log(`Browser console [${msg.type()}]: ${msg.text()}`);
  });

  // Listen for network responses
  page.on('response', response => {
    if (response.url().includes('/api/contact')) {
      console.log(`API Response: ${response.status()} ${response.statusText()}`);
    }
  });

  // Click submit button
  console.log('Submitting form...');
  await page.click('button[type="submit"]');

  // Wait for response (toast or error message)
  await page.waitForTimeout(5000);

  // Take screenshot after submission
  console.log('Taking post-submission screenshot...');
  await page.screenshot({ path: 'contact-form-submitted.png', fullPage: true });

  // Check for toast notifications
  const toastSuccess = await page.locator('text=/successfully|sent|thank you/i').count();
  const toastError = await page.locator('text=/error|failed|something went wrong/i').count();

  // Check if form was reset
  const firstNameValue = await page.inputValue('input[name="firstName"]');
  const emailValue = await page.inputValue('input[name="email"]');

  // Print results
  console.log('\n=== TEST RESULTS ===');
  console.log('Success toast found:', toastSuccess > 0);
  console.log('Error toast found:', toastError > 0);
  console.log('Form reset (firstName empty):', firstNameValue === '');
  console.log('Form reset (email empty):', emailValue === '');
  console.log('\nConsole messages:', consoleMessages);
  console.log('===================\n');

  // Get page content to check for any visible messages
  const pageContent = await page.content();
  console.log('Page contains "success":', pageContent.toLowerCase().includes('success'));
  console.log('Page contains "error":', pageContent.toLowerCase().includes('error'));
});
