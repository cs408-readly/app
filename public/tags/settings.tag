<settings>
<h1>Settings</h1>


    First name: <input type="text" id = "first" value={this.opts.user.local.firstName}><br>
    Last name: <input type="text" id = "last" value={this.opts.user.local.lastName}><br>
    email: <input type="text" id = "email" value={this.opts.user.local.email}><br>
    Password: <input type="password" id="password"><br>

    <button id="submit" type="button" onclick={submit}>Submit changes</button>

    <script>
    submit() {
        console.log("submit pressed");

        var first = document.getElementById("first").value;
        var last = document.getElementById("last").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;

        if((first === "")||(last === "")||(email === "")||(pass === "")) {

            alert("field cannot be empty");
            return;
        }

        var newUser = {
            firstName: first,
            lastName: last,
            email: email,
            password: pass
        }

        var user = this.opts.user

        var oldUser = JSON.stringify(user);
        var newUserString = JSON.stringify(newUser);
        if(oldUser === newUserString) {
            console.log("no changes have been made");
        }
        else {
            console.log(password);
            var x = new XMLHttpRequest()

            x.open('POST', '/settings', true);
            x.setRequestHeader("Content-Type", "application/json");
            x.send(JSON.stringify({ user: newUser }));
            window.location.href = '/';
        }
    }
    </script>

    <style>

    input[type=text], select {
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
    }

    input[type=password], select {
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
    }
    </style>
</settings>
