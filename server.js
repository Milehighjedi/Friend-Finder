const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const friends = require('./app/data/friends');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/public"));


app.listen(PORT, function(){
    console.log("listening on" + PORT);
})
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);