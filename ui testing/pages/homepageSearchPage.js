// homepageSearchPage.js
module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php',
  elements: {
    searchField: '#search_query_top',
    submitButton: 'button[type=submit]',
    searchResults: '.product-container',
    productNameSelector: '.product-name'
  },
  commands: [{
    performHomepageSearch: function (query) {
      return this
        .waitForElementVisible('body')
        .setValue('@searchField', query)
        .click('@submitButton')
        .pause(1000);
    }
  }]
};