//This is the API file to bring data to Angular

var express = require('express');
var apps = express.Router();
var models = require('./schema.js');

apps.get('/', function (req, res) {
	models.recipe.find({}, function (err, data) {
		res.json(data);

	})

	// .post(function(req, res) {
	// 	req.body.id = apps.length;
	// 	apps.push(req.body);
	// 	return res.status(201).send(req.headers.host + req.originalUrl + '/' + req.body.id);
	// });
});
// apps.route('/:id')

// 	.get(function(req, res){
// 		if (isNaN(req.params.id) || req.params.id > apps.length) res.send(400);
// 		return res.send(apps[req.params.id]);
// 	})

// 	.put(function(req, res){
// 		if (isNaN(req.params.id) || req.params.id > apps.length) res.send(400);
// 		req.body.id = req.params.id;
// 		apps[req.params.id] = req.body;
// 		return res.send(req.headers.host + req.originalUrl);
// 	})

// 	.delete(function(req, res){
// 		if (isNaN(req.params.id) || req.params.id > apps.length) res.send(400);
// 		apps.splice(req.params.id, 1);
// 		apps.forEach(function(value, index) {
// 			value.id = index;
// 		});
// 		return res.sendStatus(200);
// 	});

module.exports = apps;