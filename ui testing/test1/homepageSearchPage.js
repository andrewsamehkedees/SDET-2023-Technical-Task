// // homepageSearchPage.js
// module.exports = {
//   url: 'http://automationpractice.multiformis.com/index.php',
//   elements: {
//     searchField: '#search_query_top',
//     submitButton: 'button[type=submit]',
//     searchResults: '#product_list' // Adjust the selector based on your HTML structure
//   },
//   commands: [{
//     performHomepageSearch: function(query) {
//       return this
//         .waitForElementVisible('body')
//         .setValue('@searchField', query)
//         .click('@submitButton')
//         .pause(1000);
//     },

//     verifySearchResultsContainDresses: function() {
//       return this.api.elements('@searchResults', result => {
//         result.value.forEach(element => {
//           this.api.elementIdText(element.ELEMENT, item => {
//             this.verify.equal(item.value.toLowerCase(), 'dress', 'Each item in search results should be a dress');
//           });
//         });
//       });
//       return this; // Return this to make the command chainable
//     },
//   }]
// };
