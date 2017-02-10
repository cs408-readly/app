var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

process.env.NODE_ENV = 'test';


describe('Basic functionality', function() {
    var server;
    beforeEach(function() {
        server = require('../app.js');
    });

    afterEach(function() {
        server.close();
    });

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
