const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log('Starting design review...');

  try {
    // Homepage - Desktop
    console.log('Navigating to homepage...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/design-review-screenshots/01-homepage-desktop-1440.png', fullPage: true });
    console.log('✓ Homepage desktop screenshot captured');

    // Homepage - Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ path: '/tmp/design-review-screenshots/02-homepage-tablet-768.png', fullPage: true });
    console.log('✓ Homepage tablet screenshot captured');

    // Homepage - Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: '/tmp/design-review-screenshots/03-homepage-mobile-375.png', fullPage: true });
    console.log('✓ Homepage mobile screenshot captured');

    // Services page - Desktop
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/design-review-screenshots/04-services-desktop.png', fullPage: true });
    console.log('✓ Services page desktop screenshot captured');

    // Contact page - Desktop
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/design-review-screenshots/05-contact-desktop.png', fullPage: true });
    console.log('✓ Contact page desktop screenshot captured');

    // Test hover state on CTA button
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    const ctaButton = page.locator('a[href="tel:616-648-7775"]').first();
    await ctaButton.hover();
    await page.screenshot({ path: '/tmp/design-review-screenshots/06-button-hover-state.png' });
    console.log('✓ Button hover state captured');

    // Check console logs
    const consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push({ type: msg.type(), text: msg.text() });
    });

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    console.log('\n=== Console Messages ===');
    consoleLogs.forEach(log => {
      console.log(`[${log.type}] ${log.text}`);
    });

    // Test keyboard navigation
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.screenshot({ path: '/tmp/design-review-screenshots/07-focus-state-1.png' });

    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.screenshot({ path: '/tmp/design-review-screenshots/08-focus-state-2.png' });
    console.log('✓ Focus states captured');

    // Service detail page
    await page.goto('http://localhost:3000/services/water-damage-restoration', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/design-review-screenshots/09-service-detail.png', fullPage: true });
    console.log('✓ Service detail page captured');

    // Location page
    await page.goto('http://localhost:3000/locations', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/design-review-screenshots/10-locations-page.png', fullPage: true });
    console.log('✓ Locations page captured');

    console.log('\n✓ Design review screenshots completed successfully!');

  } catch (error) {
    console.error('Error during design review:', error);
  } finally {
    await browser.close();
  }
})();
