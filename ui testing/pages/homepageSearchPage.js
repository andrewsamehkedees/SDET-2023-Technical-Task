// homepageSearchPage.js
module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php',
  elements: {
    searchField: '#search_query_top',
    submitButton: 'button[type=submit]',
    searchResults: '.product-container', // Adjust the selector based on your HTML structure
    productNameSelector: '.product-name'
  },
  commands: [{
    performHomepageSearch: function (query) {
      return this
        .waitForElementVisible('body')
        .setValue('@searchField', query)
        .click('@submitButton')
        .pause(1000);
    },

    //     verifySearchResultsContainDresses: function() {
    //       return this
    //         .assert.containsText('@searchResults', 'Dress')
    //         // You can customize the verification based on your application's behavior
    //         .assert.elementPresent('.product-name') // Assuming there's a class for each dress item
    //         .pause(1000); // Optional: Add a pause to visually inspect the results
    //     }
    //   }]
    // };
    test: function (elements) {
      console.log('Number of results: ' + elements.value.length);
      elements.value.forEach(function (element) {
        browser.elementIdText(element.ELEMENT, function (res) {
          console.log('RESULT ' + element.ELEMENT + '\n', res.value);
        });
      });
    }
    // verifySearchResultsContainDresses: function() {
    //   return this.api.elements('css selector', this.elements.productNameSelector.selector, function (result) {
    //     result.value.forEach(function (element) {
    //       // Handle both ChromeDriver and GeckoDriver
    //       const elementId = element.ELEMENT || element['element-6066-11e4-a52e-4f735466cecf'];
    
    //       // Use the browser expect API to check if the text result contains the word 'dress'
    //       browser.expect.elementIdText(elementId).to.containsText('dress');
    //     });
    //   })
    //   .pause(1000); // Optional: Add a pause to visually inspect the results
    // }
    
  }]
};