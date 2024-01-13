const request = require('supertest');
const assert = require('assert');
const express = require('express');
const server = request.agent("http://localhost:3000");
const app = express();
//getting the token after using get auth for the user by enter the right email and password
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI4NjksImlhdCI6MTcwNTE3NDg0MSwiZXhwIjoxNzA1MjYxMjQxfQ.oIoGgFJ5sp-B-jrMYPAO8Be72lORdmPka3zOa4t1K5Y';
let key_admin ='key_admin';
// Now, let's write the tests

describe('Mock User Auth API', function () {
  // Test authentication route
  describe('authentication test', function () {
    it('should authenticate user with valid credentials', function (done) {
        server
        .post('/api/v1/auth')
        .send({ email: 'user@gmail.com', password: 'user123' })
        .expect(200,done);
    });

    it('should return an error with invalid credentials', function (done) {
        server
        .post('/api/v1/auth')
        .send({ email: 'invalid@gmail.com', password: 'invalid' })
        .expect(401, done);
    });
  });

  // Test create user route
  describe('create user test', function () {
    it('should create a user with valid data', function (done) {
        server
        .post('/api/v1/users')
        .send({ name: 'df', email: 'sdf@gmail.com', password: 'asdf2332' })
        .expect(200,done);
    });

    it('should return an error with invalid data', function (done) {
        server
        .post('/api/v1/users')
        .send({ name: '232323', email: 'asasdf', password: 'asdfasdf3' })
        .expect(401, done);
    });
  });
  describe('get user test', function () {
    it('should get user with valid authorization', function (done) {
        server
        .get('/api/v1/users')
        .set('Authorization', `${token}`)
        .expect(200,done);
    });

    it('should return an error without authorization', function (done) {
        server
        .get('/api/v1/users')
        .set('Authorization', 'test')
        .expect(401, done);
    });
  });

  // Test patch user route
  describe('update user test', function () {
    it('should update user with valid authorization', function (done) {
        server
        .patch('/api/v1/users')
        .set('Authorization', `${token}`)
        .send({ name: 'newName' })
        .expect(200, done);
    });

    it('should return an error without authorization', function (done) {
        server
        .patch('/api/v1/users')
        .send({ name: 'newName' })
        .expect(401, done);
    });
  });

  // Test delete user route
  describe('delete user test', function () {
    it('should delete user with valid authorization', function (done) {
        server
        .delete('/api/v1/users')
        // .set('Authorization', `${token}`)
        .expect(200, done);
    });

    it('should return an error without authorization', function (done) {
        server
        .delete('/api/v1/users')
        .expect(401, done);
    });
  });
  describe('delete all users test', function () {
    it('should delete user with valid authorization', function (done) {
        server
        .delete('/api/v1/all-users')
        .set('key_admin', `${key_admin}`)
        .expect(200, done);
    });

    it('should return an error without authorization', function (done) {
        server
        .delete('/api/v1/all-users')
        .expect(401, done);
    });
  });
});
// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

// const app = express();

// // Replace this with the actual implementation of your API routes
// // You may need to import your routes or modify this part based on your actual implementation
// app.post('/api/v1/auth', (req, res) => {
//   const { email, password } = req.body;
//   // Mock authentication logic, replace with actual logic
//   if (email === 'user@gmail.com' && password === 'user123') {
//     res.json({ token: 'eyJhbGciOiJI...' });
//   } else {
//     res.status(401).json({ message: 'Authentication failed' });
//   }
// });

// app.post('/api/v1/users', (req, res) => {
//   const { name, email, password } = req.body;
//   // Mock create user logic, replace with actual logic
//   res.json({ message: 'User registered with success', token: 'eyJhbGciOiJI...' });
// });

// app.get('/api/v1/users', (req, res) => {
//   const token = req.get('Authorization').replace('Bearer ', '');
//   // Mock get user by token logic, replace with actual logic
//   res.json({
//     id: 46643,
//     name: 'user',
//     email: 'user@gmail.com',
//     password: 'user123',
//     imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
//   });
// });

// app.patch('/api/v1/users', (req, res) => {
//   const token = req.get('Authorization').replace('Bearer ', '');
//   const { name, email, password } = req.body;
//   // Mock update user by token logic, replace with actual logic
//   res.json({ message: 'User updated with success' });
// });

// app.delete('/api/v1/users', (req, res) => {
//   const token = req.get('Authorization').replace('Bearer ', '');
//   // Mock delete user by token logic, replace with actual logic
//   res.json({ message: 'User deleted with success' });
// });

// app.delete('/api/v1/all-users', (req, res) => {
//   const { key_admin } = req.body;
//   // Mock delete all users logic, replace with actual logic
//   if (key_admin === 'keyadmin123') {
//     res.json({ message: 'Users deleted with success' });
//   } else {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// });

// // Tests for GET, PATCH, and DELETE routes
// describe('Mock User Auth API', function () {
//   // ... (previous tests)

//   // Test get user route
//   describe('GET /api/v1/users', function () {
//     it('should get user with valid authorization', function (done) {
//       request(app)
//         .get('/api/v1/users')
//         .set('Authorization', 'Bearer eyJhbGciOiJI...')
//         .expect(200)
//         .end(function (err, res) {
//           if (err) return done(err);
//           assert(res.body.id === 46643, 'User ID should be 46643');
//           assert(res.body.name === 'user', 'User name should be user');
//           done();
//         });
//     });

//     it('should return an error without authorization', function (done) {
//       request(app)
//         .get('/api/v1/users')
//         .expect(401, done);
//     });
//   });

//   // Test patch user route
//   describe('PATCH /api/v1/users', function () {
//     it('should update user with valid authorization', function (done) {
//       request(app)
//         .patch('/api/v1/users')
//         .set('Authorization', 'Bearer eyJhbGciOiJI...')
//         .send({ name: 'newName', email: 'new_email@gmail.com', password: 'newpassword123' })
//         .expect(200, done);
//     });

//     it('should return an error without authorization', function (done) {
//       request(app)
//         .patch('/api/v1/users')
//         .send({ name: 'newName', email: 'new_email@gmail.com', password: 'newpassword123' })
//         .expect(401, done);
//     });
//   });

//   // Test delete user route
//   describe('DELETE /api/v1/users', function () {
//     it('should delete user with valid authorization', function (done) {
//       request(app)
//         .delete('/api/v1/users')
//         .set('Authorization', 'Bearer eyJhbGciOiJI...')
//         .expect(200, done);
//     });

//     it('should return an error without authorization', function (done) {
//       request(app)
//         .delete('/api/v1/users')
//         .expect(401, done);
//     });
//   });

// //   // Add tests for other routes as per your API implementation
// });
// Import the necessary modules
// const supertest = require('supertest');
// const assert = require('assert');

// // This agent refers to PORT where the program is running.
// const server = supertest.agent("http://localhost:3000");

// // Define the user credentials
// const userCredentials = {
//   email: 'user@gmail.com',
//   password: 'user123'
// };
// const userCredentialscreate = {
//     email: 'asdasd@gmail.com',
//     password: 'asdasdsda'
//   };

// // Define the admin key
// const adminKey = 'keyadmin123';

// // Test the AUTHENTICATE USER route
// describe('AUTHENTICATE USER', function() {
//     it('should authenticate the user and return a token', function(done) {
//       server
//       .post('/api/v1/auth')
//       .send(userCredentials)
//       .expect('Content-type',/json/)
//       .expect(200) // This is the HTTP response
//       .end(function(err, res) {
//         // HTTP status should be 200
//         assert.equal(res.status, 200);
//         // Error key should be false.
//         // assert.equal(res.body.error, false);
//         // Token should be a string and not empty
//         assert.equal(typeof res.body.token, 'string');
//         assert.notEqual(res.body.token, '');
//         // Assign the token from the response to the token variable
//         token = res.body.token;
//         done();
//       });
//     });
//   });
  

// // Test the CREATE USER route
// // Test the CREATE USER route
// describe('CREATE USER', function() {
//     it('should create a new user and return a token', function(done) {
//       server
//       .post('/api/v1/users')
//       .send(userCredentialscreate)
//       .expect('Content-type',/json/)
//       .expect(200)
//       .end(function(err, res) {
//         // HTTP status should be 200
//         assert.equal(res.status, 200);
//         // Token should be a string and not empty
//         // assert.equal(typeof res.body.token, 'string');
//         assert.notEqual(res.body.token, '');
//         done();
//       });
//     });
//   });
  

// // Test the GET USER route
// describe('GET USER', function() {
//   it('should get the user details', function(done) {
//     server
//     .get('/api/v1/users')
//     .set('Authorization', 'Bearer ' + token)
//     .expect('Content-type',/json/)
//     .expect(200)
//     .end(function(err, res) {
//       assert.equal(res.status, 200);
//       done();
//     });
//   });
// });

// // Test the PATCH USER route
// describe('PATCH USER', function() {
//   it('should update the user details', function(done) {
//     server
//     .patch('/api/v1/users')
//     .set('Authorization', 'Bearer ' + token)
//     .send({ name: 'newName', email: 'new_email@gmail.com', password: 'newpassword123' })
//     .expect('Content-type',/json/)
//     .expect(200)
//     .end(function(err, res) {
//       assert.equal(res.status, 200);
//       done();
//     });
//   });
// });

// // Test the DELETE USER route
// describe('DELETE USER', function() {
//   it('should delete the user', function(done) {
//     server
//     .delete('/api/v1/users')
//     .set('Authorization', 'Bearer ' + token)
//     .expect('Content-type',/json/)
//     .expect(200)
//     .end(function(err, res) {
//       assert.equal(res.status, 200);
//       done();
//     });
//   });
// });

// // Test the DELETE ALL USERS route
// describe('DELETE ALL USERS', function() {
//   it('should delete all users', function(done) {
//     server
//     .delete('/api/v1/users')
//     .send({ key_admin: adminKey })
//     .expect('Content-type',/json/)
//     .expect(200)
//     .end(function(err, res) {
//       assert.equal(res.status, 200);
//       done();
//     });
//   });
// });
