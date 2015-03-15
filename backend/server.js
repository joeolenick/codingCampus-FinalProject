//Bringing in express 
var express = require('express');
var app = express();
//Bringing in bodyParser for JSON
var bodyParser = require('body-parser');

//Bringing in Router files
var recipes = require('./router.js');

///////////////
//Middleware
///////////////

//Authorization
app.use( function (req, res, next) {
	if (req.headers.authorization === 'SuperSecretPasswordStoredInPlainText') {
		next();
	} else {
		res.status(403).send("I don't know who you are..." );
	}
});

//Body Parser, JSON
app.use(bodyParser.json());
//Body Parser, URL encode 
app.use(bodyParser.urlencoded({ extended: false }));

//Linking router variables to url path used
app.use('/recipes/', recipes);

//Port the app will run on
app.listen(5000);
