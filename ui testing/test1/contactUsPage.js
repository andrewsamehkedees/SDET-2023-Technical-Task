// // ContactUsPage.js
// module.exports = {
//   url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
//   elements: {
//     subjectHeadingDropdown: '#id_contact',
//     emailField: '#email',
//     orderField: '#id_order',
//     messageField: '#message',
//     fileUploadField: '#fileUpload',
//     submitButton: '#submitMessage' // Update the selector to match the button's id
//   },
//   commands: [{
//     submitContactForm: function(subjectHeading, email, order, message, filePath) {
//       return this
//         .waitForElementVisible('body')
//         .setValue('@subjectHeadingDropdown', subjectHeading)
//         .setValue('@emailField', email)
//         .setValue('@orderField', order)
//         .setValue('@messageField', message)
//         .setValue('@fileUploadField', require('path').resolve(__dirname + filePath))
//         .click('@submitButton')
//         .pause(1000);
//     }
//   }]
// };
