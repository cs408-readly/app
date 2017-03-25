var request = require('request');
var recommendationUrl = 'http://localhost:5000/recommend';

module.exports = function(app) {

    app.post('/recommend', function(req, res) {

        var user = req.user;
        console.log(user._id);
        var string = JSON.stringify(user._id);
        console.log(string);
        request.post({url: recommendationUrl, form: {user_id: string}}, function(err, response, body) {
            console.log(body);
            res.send().status(200);
            // res.send(body).status(200);
        });
    });

};
