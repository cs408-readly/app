var request = require('request');

function randomize( myArray ) {

    var i = myArray.length;
    if ( i == 0 ) return false;

    while ( --i ) {

        var j = Math.floor( Math.random() * ( i + 1 ) );
        var tempi = myArray[i];
        var tempj = myArray[j];
        myArray[i] = tempj;
        myArray[j] = tempi;
    }
}

function saveArticles(my_articles, callback, res) {

    // TODO write mongo article saving here

    callback(res, my_articles);
}

function sendArticles(res, my_articles) {
    res.send({articles: my_articles}).status(200);
}

module.exports = function(app) {

    app.get('/trending', function(req, res) {

        var newsSources = ['techcrunch', 'cnn', 'bloomberg', 'time'];
        var my_articles = [];

        newsSources.forEach(function(newsSource) {

            var url = 'https://newsapi.org/v1/articles?source='+newsSource+'&sortBy=top&apiKey=e30f46dbdaa645558d009af5b0ede4ca';
            request.get(url, function(err, response, body) {

                JSON.parse(body).articles.forEach(function(article) {

                    my_articles.push(article);
                });

                if (newsSource === newsSources[newsSources.length - 1]) {

                    randomize(my_articles);
                    saveArticles(my_articles, sendArticles, res);
                }
            });
        });
    });

};
