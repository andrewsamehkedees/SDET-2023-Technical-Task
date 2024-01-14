// testSuite.js


module.exports = {
  'Test Contact Us Form with full data': function(browser) {
    const contactPage = browser.page.contactUsPage();

    contactPage
      .navigate()
      .submitContactForm('Customer service', 'test@example.com', '12345', 'This is a test message.', '/download.png')
      .end();
  },
  'Test Contact Us Form with required only': function(browser) {
    const contactPage = browser.page.contactUsPage();

    contactPage
      .navigate()
      .submitContactForm('Customer service', 'test@example.com', '','This is a test message.','')
      .end();
  },'Test Contact Us Form with wrong mail': function(browser) {
    const contactPage = browser.page.contactUsPage();

    contactPage
      .navigate()
      .submitContactForm('Customer service', 'test', '','This is a test message.','')
      .end();
  },'Test Contact Us Form with wrong subject heading': function(browser) {
    const contactPage = browser.page.contactUsPage();

    contactPage
      .navigate()
      .submitContactForm('asdasd', 'test@example.com', '','This is a test message.','')
      .end();
  },'Test Contact Us Form with wrong empty message': function(browser) {
    const contactPage = browser.page.contactUsPage();

    contactPage
      .navigate()
      .submitContactForm('asdasd', 'test@example.com', '','','')
      .end();
  },
  'Test Homepage Search': function(browser) {
    const searchPage = browser.page.homepageSearchPage();

    searchPage
      .navigate()
      .performHomepageSearch('dress')
      // .verifySearchResultsContainDresses()
      .end();
  }
};
