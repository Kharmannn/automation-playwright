const { expect } = require('@playwright/test');
const Helper = require('../utils/helper');

exports.HomePage = class HomePage extends Helper {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    
    //locator
    this.btn_like = this.page.locator("xpath=(.//a[@href='/book-a-demo'])[3]");
    this.btn_recruitment = this.page.locator("xpath=//a[@href='https://career.wasimil.com/']");
  }
};