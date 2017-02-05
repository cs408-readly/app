<news-article>

    <h1>{opts.message}</h1>

    <button type="button" onclick="upvote()">Upvote</button>
    <button type="button" onclick="downvote()">Downvote</button>
    <button type="button" onclick="comment()">Comment</button>

    <script>
    function upvote() {
        console.log('Upvoted article with id:' + opts.id);
    }
    function downvote() {
        console.log('Downvoted article with id:' + opts.id);
    }
    function upvote() {
        console.log('Commented on  article with id:' + opts.id);
    }
    </script>

</news-article>
