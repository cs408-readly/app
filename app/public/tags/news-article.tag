<news-article>
    <div id="post">
        <h1>{opts.message}</h1>

        <button type="button" onclick={upvote}>Upvote</button>
        <button type="button" onclick={downvote}>Downvote</button>
        <button type="button" onclick={comment}>Comment</button>
    </div>
    <style type="text/css">
        #post {
            margin-top: 40px;
            margin-bottom: 40px;
            text-align: center;
            font-size: 15px;
            color: white;
            background-color: #4d6c9e;
            border-radius: 10px;
            padding-top: 2px;
            padding-bottom: 10px;
        }
    </style>

    <script>
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
