<news-article>
    <div id="post">
        <h5 onclick={goToNews}><b>{opts.message}</b></h5>

        <p onclick={goToNews}>{opts.content}</p>

        <button type="button" onclick={upvote}>Upvote</button>
        <button type="button" onclick={downvote}>Downvote</button>
        <button type="button" onclick={comment}>Comment</button>
        <input type="checkbox" onclick={save}>Save</input>
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
    save(){
        console.log('article link to be saved for later: ' + this.opts.link);
    
    }

    </script>
</news-article>
