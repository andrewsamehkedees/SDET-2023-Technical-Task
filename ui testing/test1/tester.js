// testSuite.js


module.exports = {
  // 'Test Contact Us Form': function(browser) {
  //   const contactPage = browser.page.contactUsPage();

  //   contactPage
  //     .navigate()
  //     .submitContactForm('Customer service', 'test@example.com', '12345', 'This is a test message.', '/download.png')
  //     .end();
  // },

  'Test Homepage Search': function(browser) {
    const searchPage = browser.page.homepageSearchPage();

    searchPage
      .navigate()
      .performHomepageSearch('dress')
      .verifySearchResultsContainDresses()
      .end();
  }
};
