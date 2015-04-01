//This is the API file to bring data to Angular

var express = require('express');
var apps = express.Router();
var models = require('./schema.js');

apps.route('/') 

	.get(function (req, res) {
	models.recipe.find({ }, function (err, data) {
		res.json(data);
		})
	})

	.post(function(req, res) {
		if (!req.body.name) {
			res.send('invalid post');
			return;
		}
			var recipe = new models.recipe (req.body);
			recipe.save(function (err, data) {
				if (err) {
					res.send('create failed');
					return;
				}
				res.send('create successful');
		})
	})


	.put(function (req, res) {
		models.recipe.findOne({_id: req.body._id}, function (err, data) {
		if (!data) {
			res.send('id not found');
			return;
		}
		for (var key in req.body) {
			data[key] = req.body[key];
		}
		data.save(function (err, data) {
			if (err) {
				res.send('update falied');
				return;
			}
			res.send('update successful');
		});
	})
})

// apps.route('/:id')

// 	.delete(function(req, res){
// 	models.recipe.findOne({_id: req.params.id}, function (err, data) {
// 		if (!data) {
// 			res.send('id not found');
// 			return;
// 		}
// 		data.remove( function (err, data) {
// 			if (err) {
// 				res.send('delete failed');
// 				return;
// 			}
// 			res.send('delete successful');
// 		});
// 	});
// });
module.exports = apps;