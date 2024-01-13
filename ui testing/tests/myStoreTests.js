// module.exports = {
//     'Test Contact Us Form': function(browser) {
//       browser
//         .url('http://automationpractice.multiformis.com/index.php?controller=contact')
//         .waitForElementVisible('body')
//         .setValue('#email', 'test@example.com')
//         .setValue('#id_order', '12345')
//         .setValue('#message', 'This is a test message.')
//         .setValue('#fileUpload', require('path').resolve(__dirname + '/download.png'))
//         .click('button[type=submit]')
//         .pause(1000)
//         .end();
//     },

//     'Test Homepage Search': function(browser) {
//       browser
//         .url('http://automationpractice.multiformis.com/index.php')
//         .waitForElementVisible('body')
//         .setValue('#search_query_top', 'dress')
//         .click('button[type=submit]')
//         // .keys(browser.Keys.ENTER)
//         .pause(1000)
//         .end();
//     }
//   };
  