const { test, expect } = require('@playwright/test');

class Helper {

    constructor(page) {
        this.page = page;
    }

    async clickElemenAfterVisible(locator) {

        await locator.toBeVisible();
        await locator.click();
    }

    async goToUrl(url) {

        await this.page.goto(url);
    }

    async scrollUntilLocatorIsVisible(page, locator) {

        while(!(await locator.isVisible())){
            page.mouse.down()
        }
    
        const isLocatorVisible = await locator.isVisible();

        return isLocatorVisible
    }

    async checkIframePageNumbersCorrect(baseFrameLocator, current_page_iframe_selector, total_page_iframe_selector, next_slide_label) {
        let current_page;
        let total_pages;
        
        current_page = parseInt(await baseFrameLocator.locator(current_page_iframe_selector).textContent());
        total_pages = parseInt(await baseFrameLocator.locator(total_page_iframe_selector).textContent());
    
        await baseFrameLocator.getByLabel(next_slide_label).first().click();
        
        while(current_page !== total_pages) {
            await baseFrameLocator.getByLabel(next_slide_label).first().click();
            current_page++;
            console.log(current_page, total_pages);
        }
    
        const isPageEqual = current_page === total_pages;
    
        return isPageEqual;
      }
} 

module.exports = Helper;