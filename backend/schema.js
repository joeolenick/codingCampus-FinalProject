//This is the schema file that defines the database design

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://heroku_app35007124:rjs9h5av28f0qb4o1iji4tl6pe@ds043497.mongolab.com:43497/heroku_app35007124');
//var db = mongoose.connect('mongodb://localhost/recipe');

var models = {};

var RecipeSchema = mongoose.Schema({
    name: String,
    region: Array,               	// Chinese, Italian, etc
    createdBy: String,         		// Who created it // will be DB ID eventually
    published: { type: Date, default: Date.now },           	// when user created it
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
    commentId: Array,
    allergens: Array                //Enable warnings on Recipes if allergies match user
});

var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    userName: String,
    displayName: String,
    createdIt: Array,                       //list of Recipes created by this user
    makeIt: Array,                          //List of Recipes user made
    saveIt: Array,                          //List of Recipes user saved
    shareIt: Array,                         //***FUTURE USE***  When shared to social media, count it in this list. 
    allergies: Array,                       //Show warnings on some Recipes if allergies match   
    friendsAndFamily: [{name:String,        //Display Value
                        age: Number,        //can use to estimate how much user will eat in the future
                        allergies: Array,   //Show warnings on some Recipes if allergies match
                        }]     

});

var CommentSchema = mongoose.Schema({
    recipeId: String,
    userNameId: String,
    userComment: String,
    commentRating: Number       //Going to use this to filter out trash comments
})


models.recipe = mongoose.model('recipes', RecipeSchema);
models.user = mongoose.model('users', UserSchema);
models.comment = mongoose.model('comments', CommentSchema);


// var Joe = new models.user({
//     firstName
// });


module.exports = models;
