const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🌐 Navigating to contact page...');
  await page.goto('http://localhost:3000/contact');
  await page.waitForLoadState('networkidle');

  console.log('✍️  Filling out the form...');
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#phone', '616-555-1234');
  await page.fill('#email', 'john.doe@example.com');
  await page.fill('#address', '123 Main St, Lansing, MI 48933');
  await page.selectOption('#serviceType', 'water-damage');
  await page.fill('#description', 'This is a test submission to verify the contact form works correctly after the form reset fix.');

  console.log('📸 Taking screenshot before submit...');
  await page.screenshot({ path: 'before-submit.png' });

  // Listen for console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  console.log('🚀 Submitting form...');
  await page.click('button[type="submit"]');

  // Wait for the form to submit and toast to appear
  console.log('⏳ Waiting for success toast...');
  await page.waitForTimeout(3000);

  console.log('📸 Taking screenshot after submit...');
  await page.screenshot({ path: 'after-submit.png' });

  // Check if form fields are empty (reset)
  const firstNameValue = await page.inputValue('#firstName');
  const lastNameValue = await page.inputValue('#lastName');
  const phoneValue = await page.inputValue('#phone');
  const emailValue = await page.inputValue('#email');
  const addressValue = await page.inputValue('#address');
  const descriptionValue = await page.inputValue('#description');

  console.log('\n=== TEST RESULTS ===');
  console.log('Form field values after submit:');
  console.log('  First Name:', firstNameValue === '' ? '✅ EMPTY (RESET)' : `❌ "${firstNameValue}"`);
  console.log('  Last Name:', lastNameValue === '' ? '✅ EMPTY (RESET)' : `❌ "${lastNameValue}"`);
  console.log('  Phone:', phoneValue === '' ? '✅ EMPTY (RESET)' : `❌ "${phoneValue}"`);
  console.log('  Email:', emailValue === '' ? '✅ EMPTY (RESET)' : `❌ "${emailValue}"`);
  console.log('  Address:', addressValue === '' ? '✅ EMPTY (RESET)' : `❌ "${addressValue}"`);
  console.log('  Description:', descriptionValue === '' ? '✅ EMPTY (RESET)' : `❌ "${descriptionValue}"`);

  if (errors.length > 0) {
    console.log('\n❌ Console Errors:');
    errors.forEach(err => console.log('  -', err));
  } else {
    console.log('\n✅ No console errors detected');
  }

  // Check for toast message
  const toastVisible = await page.locator('text="Thank you!"').isVisible().catch(() => false);
  console.log('\nSuccess Toast:', toastVisible ? '✅ VISIBLE' : '❌ NOT VISIBLE');

  const allFieldsReset = firstNameValue === '' && lastNameValue === '' && phoneValue === '' &&
                         emailValue === '' && addressValue === '' && descriptionValue === '';

  console.log('\n=== FINAL VERDICT ===');
  if (allFieldsReset && errors.length === 0) {
    console.log('✅ CONTACT FORM TEST PASSED!');
    console.log('   - Form submitted successfully');
    console.log('   - All fields reset after submission');
    console.log('   - No console errors');
  } else {
    console.log('❌ CONTACT FORM TEST FAILED');
    if (!allFieldsReset) console.log('   - Form did not reset properly');
    if (errors.length > 0) console.log('   - Console errors detected');
  }

  await browser.close();
})();
