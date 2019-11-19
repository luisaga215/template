const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

var server = app.listen(8000, function() {
    console.log("Server in port 8000");
});
