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

        var newsSources = ['abc-news-au', 'ars-technica', 'associated-press', 'bbc-news', 'bbc-sport', 'bild', 'bloomberg', 'business-insider', 'business-insider-uk', 'buzzfeed', 'cnbc', 'cnn', 'daily-mail', 'engadget', 'entertainment-weekly', 'espn', 'espn-cric-info', 'financial-times', 'focus', 'football-italia', 'fortune', 'four-four-two', 'fox-sports', 'google-news', 'hacker-news', 'ign', 'independent', 'mashable', 'metro', 'mirror', 'mtv-news', 'mtv-news-uk', 'national-geographic', 'new-scientist', 'newsweek', 'new-york-magazine', 'nfl-news', 'polygon', 'recode', 'reddit-r-all', 'reuters', 'sky-news', 'sky-sports-news', 'spiegel-online', 't3n', 'talksport', 'techcrunch', 'techradar', 'the-economist', 'the-guardian-au', 'the-guardian-uk', 'the-hindu', 'the-huffington-post', 'the-lad-bible', 'the-new-york-times', 'the-telegraph', 'the-times-of-india', 'the-verge', 'the-wall-street-journal', 'the-washington-post', 'time', 'usa-today', 'wired-de'];
        var my_articles = [];

        newsSources.forEach(function(newsSource) {

            var url = 'https://newsapi.org/v1/articles?source='+newsSource+'&sortBy=top&apiKey=e30f46dbdaa645558d009af5b0ede4ca';
            request.get(url, function(err, response, body) {

                try {
                JSON.parse(body).articles.forEach(function(article) {

                    my_articles.push(article);
                });
                } catch (e) {
                    console.log(newsSource);
                }

                if (newsSource === newsSources[newsSources.length - 1]) {

                    randomize(my_articles);
                    saveArticles(my_articles, sendArticles, res);
                }
            });
        });
    });

};
