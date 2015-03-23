//Bringing in express 
var express = require('express');
var apps = express();
//Bringing in bodyParser for JSON
var bodyParser = require('body-parser');

//Bringing in Router files
var recipes = require('./router.js');

var ngResource = require('ng-resource');
///////////////
//Middleware
///////////////

//Authorization
apps.use( function (req, res, next) {
	if (req.headers.authorization === 'SuperSecretPasswordStoredInPlainText') {
		next();
	} else {
		res.status(403).send("I don't know who you are..." );
	}
});

//Body Parser, JSON
apps.use(bodyParser.json());
//Body Parser, URL encode 
apps.use(bodyParser.urlencoded({ extended: false }));

//Linking router variables to url path used
apps.use('/recipes/', recipes);

//Port the apps will run on
apps.listen(5000);
