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
    ingredients: [{item: String,             // what is in it and how much
                 amount: String,            // how much is in it
                 unitOfMeasure: String }],   // Tsp, cup, etc 
    instructions: Array,			//How to make it
    servings: String,				
    equipment: Array,				//Any special Equipment needed? 
    previewText: String,        	//Preview shows on browse
    img: Array,						//images of food
    mealType: Array,        		//Breakfast, Lunch, Snack, etc
    rating: Number					//UserRating
});

models.recipe = mongoose.model('recipe', RecipeSchema);

var crepes = new Recipe({
	name: "Crapes",
	region: "French",
	createdBy: "Joe Olenick",
	published: Date.now,
	isPublic: "true",
	ingredients: 
		[{item: "all-purpose flour", amount: "1", unitOfMeasure: "cup" },
		{item: "white sugar", amount: "1", unitOfMeasure: "teaspoon" },
		{item: "salt", amount: ".25", unitOfMeasure: "teaspoon" },
		{item: "eggs", amount: "3", unitOfMeasure: "large" },
		{item: "milk", amount: "2", unitOfMeasure: "cups" },
		{item: "butter", amount: "2", unitOfMeasure: "tablespoon" }],
	instructions: ["Sift together flour, sugar and salt; set aside. In a large bowl, beat eggs and milk together with an electric mixer. Beat in flour mixture until smooth; stir in melted butter.", "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 2 tablespoons for each crepe. Tip and rotate pan to spread batter as thinly as possible. Brown on both sides and serve hot."],
	servings: "12",
	equipment: [],
	previewText: "The most incredible food possibly know to man. it is an extreme blast of deliciousness in your mouth with a surprise of delectable insides. either choclate, jelly, sugar, cinnamon, or whatever else you can think of.",
	img: [],
	mealType: ["breakfast", "dessert"],
	rating: 5
})

module.exports = models;
