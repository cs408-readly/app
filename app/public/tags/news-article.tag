<news-article>
    <div>
        <h1>{opts.message}</h1>

        <button type="button" onclick={upvote}>Upvote</button>
        <button type="button" onclick={downvote}>Downvote</button>
        <button type="button" onclick={comment}>Comment</button>
    </div>
    <style type="text/css">
		div {
			text-align: center;
			font-size: 15px;
			color: white;
			background-color: #4d6c9e;
			width: 500px;
			margin-bottom: 40px;
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
