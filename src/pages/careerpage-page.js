const { expect } = require('@playwright/test');
const Helper = require('../utils/helper');

exports.CareerPage = class CareerPage extends Helper {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    
    //selector
    this.img_main_wrapper = "xpath=(.//img[@alt='image'])[1]";
    this.txt_mission = ".//span[contains(text(), 'Our Mission')]";
    this.txt_value = ".//span[contains(text(), 'Our Value')]";
    this.txt_mission_locator ="xpath = .//span[contains(text(), 'Our Mission')]";
    this.txt_entrance_book = "xpath = .//span[contains(text(), 'Entrance Book')]";

    //selector slideshare
    this.iframe_slideshare = "title='www.slideshare.net'";
    // this.iframe_slideshare = this.page.frameLocator("xpath=.//iframe[@title='www.slideshare.net']");
    this.slideshare_btn_prev = "xpath=.//button[@id='previous-slide]";
    this.slideshare_btn_right = "xpath=.//button[@id='next-slide]";
    this.slideshare_current_page = "xpath=(.//span[@data-cy='current-slide-number'])[1]";
    this.slideshare_total_page = "xpath=(.//span[@class='total-slides j-total-slides'])[1]";
    this.slideshare = "iframe[title='www.slideshare.net']";
  }

};