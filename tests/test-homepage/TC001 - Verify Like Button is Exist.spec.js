const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../src/pages/homepage-page');
const { CareerPage } = require('../../src/pages/careerpage-page');

let homepage;
let careerPage;

test.beforeEach(async ({ page }) => {
  homepage = new HomePage(page);
  careerPage = new CareerPage(page);

  // Navigate to the homepage URL
  await homepage.goToUrl('https://www.wasimil.com/');
});

test('check the element on the homepage', async () => {
  // Test logic using the homepage object
  await expect(homepage.btn_like).toBeVisible(); 
});

test('navigate to career page and check elements', async ({ context }) => {
  // Click on the recruitment button
  await homepage.btn_recruitment.click();

  // Wait for the new page to open
  const tabPromise = await context.waitForEvent('page');

  // Switch to the new page context
  const newTab = await tabPromise;
  await newTab.waitForLoadState('domcontentloaded');
  
  // Check elements on the new page
  await expect(newTab.locator(careerPage.img_main_wrapper)).toBeVisible(); 
});
