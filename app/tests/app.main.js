var request = require('supertest');
describe('loading express', function() {
    var server;
    beforeEach(function() {
        server = require('../app.js');
    });

    afterEach(function() {
        server.close();
    });
    it('responds to /trending', function testSlash(done) {
        request(server)
            .get('/trending')
            .expect(200, done);
    });
});