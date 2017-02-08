<news-article>
    <div id="post" onclick={goToNews}>
        <h5><b>{opts.message}</b></h5>

        <p>{opts.content}</p>

        <button type="button" onclick={upvote}>Upvote</button>
        <button type="button" onclick={downvote}>Downvote</button>
        <button type="button" onclick={comment}>Comment</button>
    </div>
    <style type="text/css">

        h5,p {
            text-align: left;
        }

        #post {
            text-align: center;
            font-size: 15px;
            border-radius: 10px;
            padding-left: 30px;
            padding-top: 2px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e0e7ed;
        }
        #post:hover {
            background-color: #e0e7ed;
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
