var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app.js');

chai.use(chaiHttp);

describe('Trending functionality', function(){


    it('returns valid JSON', function(done) {
        chai.request(server)
            .get('/trending')
            .end(function(err, res) {
                JSON.parse(res.body).should.be.a('object');
                done();
            });
    });

    it('has articles array', function(done) {
        chai.request(server)
            .get('/trending')
            .end(function(err, res) {
                var body = JSON.parse(res.body);

                body.should.have.property('articles');
                body.articles.should.be.a('array');
                done();
            });
    });

    it('should contain valid articles', function(done) {
        chai.request(server)
            .get('/trending')
            .end(function(err, res) {
                var array = JSON.parse(res.body).articles;

                array.forEach(function(article) {
                    article.should.have.property('url');
                    article.url.should.be.a('string');

                    article.should.have.property('description');
                    article.description.should.be.a('string');

                    article.should.have.property('title');
                    article.title.should.be.a('string');
                });

                done();
            });

    });

});
