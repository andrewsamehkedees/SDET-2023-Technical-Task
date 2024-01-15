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