//This is the schema file that defines the database design

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/recipe');

var models = {};


var RecipeSchema = mongoose.Schema({
	name: String,
	region: String,           				// Chinese, Italian, etc
	createdBy: String,     					// Who created it
	published: Date,        				// when they created it
	isPublic: Boolean,     					// is publish will show in Browse
	ingredients: {item: String,     	    // what is in it and how much
	             amount: String,    		// how much is in it
	             UnitOfMeasure: String }  	// Tsp, cup, etc 
        instructions: String,
        previewText: String,
        img: String,
        mealType; Array,        //Breakfast, Lunch, Snack, etc
        rating: Number			//Average of all input from users
});


models.recipe = mongoose.model('recipe', RecipeSchema);

module.exports = models;
