var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app.js');

chai.use(chaiHttp);

process.env.NODE_ENV = 'test';

describe('Basic functionality', function() {

    it('responds to /login', function(done) {
        chai.request(server)
            .get('/login')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('responds to /signup', function(done) {
        chai.request(server)
            .get('/signup')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('responds to /trending', function(done) {
        chai.request(server)
            .get('/trending')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

require('./trending.test.js');
