const { expect, test } = require('@playwright/test');
const { CareerPage } = require('../../src/pages/careerpage-page');
const { assert } = require('console');
const exp = require('constants');

let careerPage;

test.beforeEach(async({ page }) => {

    careerPage = new CareerPage(page);
    careerPage.goToUrl('https://career.wasimil.com');
    await page.waitForLoadState('load');

    // check if the img has already visible
    await page.locator(careerPage.img_main_wrapper).waitFor({state:"visible"});
});

test('Ensuring element in slideshare iframe correct', async({ page }) => {
    const iframeLocator = page.locator(careerPage.slideshare);
    const baseFrameLocator = iframeLocator.frameLocator(':scope');

    await page.locator(careerPage.txt_entrance_book).scrollIntoViewIfNeeded();
    const isIframeVisibleAfterScroll = await careerPage.scrollUntilLocatorIsVisible(page, iframeLocator);
    await expect(isIframeVisibleAfterScroll).toBeTruthy();

    const isIframeSlideFullyLoaded = await careerPage.checkIframePageNumbersCorrect(baseFrameLocator, careerPage.slideshare_current_page, 
        careerPage.slideshare_total_page, "Next Slide");
    console.log(isIframeSlideFullyLoaded);
    await expect(isIframeSlideFullyLoaded).toBeTruthy()
});