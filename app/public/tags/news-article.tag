<news-article>

    <h1>{opts.message}</h1>

    <button type="button" onclick={upvote}>Upvote</button>
    <button type="button" onclick={downvote}>Downvote</button>
    <button type="button" onclick={comment}>Comment</button>

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
