//This is the schema file that defines the database design

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://heroku_app35007124:rjs9h5av28f0qb4o1iji4tl6pe@ds043497.mongolab.com:43497/heroku_app35007124');

var models = {};

var recipeSchema = mongoose.Schema({
    name: String,
    region: Array,               	// Chinese, Italian, etc
    createdBy: String,         		// Who created it // will be DB ID eventually
    published: { type: Date, default: Date.now },           	// when they created it
    isPublic: Boolean,         		// is publish will show in Browse
    ingredientList: 
		[{item: String, 
			amount: Number, 
			unitOfMeasure: String}],  // Tsp, cup, etc 
    instructions: Array,			//How to make it
    servings: String,				
    equipment: Array,				//Any special Equipment needed? 
    previewText: String,        	//Preview shows on browse
    img: Array,						//images of food
    mealType: Array,        		//Breakfast, Lunch, Snack, etc
    rating: Number,					//User Rating
    userComment: String
});


models.recipe = mongoose.model('recipes', recipeSchema);


module.exports = models;
