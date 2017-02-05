<header>
    <div id="header">
        <h1 id="title">Readly</h1>
        <button id="settings" type="button" onclick={settings}>Settings</button>
    </div>
    <style type="text/css">
        #header {
            width: fill;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            padding-right: 10px;
            margin: 0px;    
            color: white;
            text-align: center;
            background-color: #444d5b;
        }
        #settings {
            display: inline;
            float: right;
        }
        #title {
            display: inline;
            margin-left: 100px;
            text-align: center;
        }
    </style>

    <script>
    settings() {
        console.log('Settings button pressed');
    }
    </script>
</header>
