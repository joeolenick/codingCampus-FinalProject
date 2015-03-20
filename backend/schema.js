//This is the schema file that defines the database design

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/recipe');

var models = {};

var RecipeSchema = mongoose.Schema({
    name: String,
    region: Array,               	// Chinese, Italian, etc
    createdBy: String,         		// Who created it // will be DB ID eventually
    published: Date,            	// when they created it
    isPublic: Boolean,         		// is publish will show in Browse
    ingredientList: [Ingredients],   // Tsp, cup, etc 
    instructions: Array,			//How to make it
    servings: String,				
    equipment: Array,				//Any special Equipment needed? 
    previewText: String,        	//Preview shows on browse
    img: Array,						//images of food
    mealType: Array,        		//Breakfast, Lunch, Snack, etc
    rating: Number,					//User Rating
    userComment: String
});

var IngredientsSchema = mongoose.schema({
	item: String,
	amount: Number
	unitOfMeasure: String
})

models.recipe = mongoose.model('recipe', RecipeSchema);
models.recipe = mongoose.model('ingredients', IngredientsSchema);




module.exports = models;
