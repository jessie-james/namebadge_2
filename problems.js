////////data problem 9 ////////////////////////////////////////
//Instructions"
//Make a function called favFood that does not take in any parameters.
//The function should return a string that has a value of  "My favorite food is pizza"
//Instead of explicitly typing "pizza", make reference to the existing variable called food.

//Use template strings.
//Do not use concatenation ("My favorite food is " + food)""
///////////////////////////////////////////////////////////////////

var food = "pizza";
function favFood() {
 return "My favorite food is" + food;
}

/////////////////////////////////////////////////////
//////////////////////////////////////////////////////

////////////// Function Practice Problem 6/////////////////
//Instructions:
//Create a function called makeExercise that has two parameters-- exerciseName(string) and duration(number).
//The function should return an object with two key-value pairs. The first property name should be "exerciseName" with a value of the first parameter. The second property name should be "duration" with a value of the second parameter.
//////////////////////////////////////////////

var makeExercise = {
   exerciseName: exerciseName,
   duration: duration,
 };
 return makeExercise.exerciseName(duration);
}

/////////////////////////////////////////////////////
//////////////////////////////////////////////////////

///////////////If Statement Practice Problem 9///////////////
//Instructions Instructions
//Write a function called makePurchase that takes in a parameter called priceOfItem. If the priceOfItem is less than or equal to the total on the user object, have the makePurchase function subtract the priceOfItem from the current users total. If the priceOfItem is greater than the total in the user object then have the function return "not enough funds".
//Use the if and else keywords in your final solution.
//The arguments passed into the makePurchase function will always be numbers.


//////////////////////////////////////////////////////
var user = {
 name: "Tiffany",
 total: 50
};

function makePurchase(priceOfItem) {
 if(priceOfItem <= user.total) {
  priceOfItem - user.total;
 }
 else{
   return "not enough funds";
 }
}
