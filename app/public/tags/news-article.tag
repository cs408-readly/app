<news-article>
    <div id="post" onclick={goToNews}>
        <h5><b>{opts.message}</b></h5>

        <p>{opts.content}</p>

        <button id="upvote"type="button" onclick={upvote}>Upvote</button>
        <button id="downvote"type="button" onclick={downvote}>Downvote</button>
        <button id="comment"type="button" onclick={comment}>Comment</button>
    </div>
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
            background-color: #e0e7ed;
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
    </style>

    <script>
    goToNews() {
        window.open(this.opts.link);
    }
    upvote() {
        console.log('Upvoted article with id:' + this.opts.id);
    }
    downvote() {
        console.log('Downvoted article with id:' + this.opts.id);
    }
    comment() {
        console.log('Commented on  article with id:' + this.opts.id);
    }
    </script>
</news-article>
