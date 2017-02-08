<header>
    <h3 id="title">Readly</h3>
    <button id="settings" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
        <i class="material-icons">add</i>
    </button>

    <style type="text/css">
        header {
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
        #settings:hover {
            background-color: white;
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
