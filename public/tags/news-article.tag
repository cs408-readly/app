<news-article>

    <div id="post">

        <h5 onclick={goToNews}><b>{opts.message}</b></h5>

        <p onclick={goToNews}>{opts.content}</p>

        <button id="upvote" type="button" onclick={upvote}> Upvote</button>
        <button id="downvote" type="button" onclick={downvote}>Downvote</button>
        <button id="comment" type="button" onclick={comment}>Comment</button>
        <button id="favorite" type="button" onclick={favorite}>Favorite</button>

    </div>

    <script>

    goToNews() {
        window.open(this.opts.link);
    }

    upvote() {
        var x = new XMLHttpRequest();
        x.open('POST', '/upvote', true);
        x.setRequestHeader("Content-Type", "application/json");
        var send_data = { article_id: this.opts.id, source: this.opts.source };
        console.log(send_data);
        x.send(JSON.stringify(send_data));
    }

    downvote() {
        console.log('Downvoted article with id:' + this.opts.id);
    }

    comment() {
        console.log('Commented on  article with id:' + this.opts.id);
    }

    favorite() {
        console.log('Favorited an article with id:'+this.opts.id);
    }

    save(){
        console.log('article link to be saved for later: ' + this.opts.link);
    }

    </script>

    <style type="text/css">

        h5,p {
            text-align: left;
        }

        h5:hover {
            text-decoration: underline;
        }

        #post {
            text-align: center;
            font-size: 15px;
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 2px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e0e7ed;
        }

        #post:hover {
            background-color: #f0f7fb;
        }

        #upvote {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font: 16px;
            border-radius: 10px;
        }

        #downvote {
            background-color: #f44336;
            border: none;
            color: white;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font: 16px;
            border-radius: 10px;

        }

        #comment {
            background-color: #e7e7e7;
            color: black;
            border: none;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font: 16px;
            border-radius: 10px;
        }
        #favorite {
            background-color: #e7e7e7;
            color: black;
            border: none;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font: 16px;
            border-radius: 10px;
        }

    </style>
</news-article>
