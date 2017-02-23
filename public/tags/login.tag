<login id="login">
    <!-- LOGIN FORM -->
    <form action="/login" method="post" id="login">
        <div class="form-group">
            <label>Email</label>
            <input type="text" name="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password">
        </div>

        <button type="submit">Login</button>
    </form>
    <style type="text/css">
        #login {

        }
        .form-group {
            padding: 2px;
        }
    </style>
</login>

<signup id="signup">
<!-- LOGIN FORM -->

    <form action="/signup" method="post" if={!social}>
        <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" name="firstName">
        </div>
        <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" name="lastName">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="text" name="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password">
        </div>

        <button type="submit">Signup</button>
    </form>

    <div id="social" if={social}>
        test social
    </div>
    
    this.social = false;
    <style type="text/css">
        .form-group {
            padding: 2px;
        }
    </style>
</signup>

<auth id="auth">
    <div id="container">
        <div id="card">
            <signup></signup>
            <login></login>
        </div>
    </div>
    <style type="text/css">
        #container {
            width:300px;
            position:absolute;
            left:50%;
            top:50%;
            margin:-100px 0 0 -150px;
        }
        #card {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 20px;
            padding-right: 20px;
            display: flex;
            text-align: center;
            background-color: blue;
            border: 2px solid red;
            border-radius: 5px;

        }
    </style>
</auth>