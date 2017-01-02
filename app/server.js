var express = require('express');
var path = require('path');
var app = express();

// mongodb setup
var mongoose = require('mongoose');

var PORT = process.env.PORT || 3000;

console.log("directory ", path.join(__dirname, 'node_modules'));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.listen(PORT, function(){
	console.log("Listening on PORT %d", PORT);
});