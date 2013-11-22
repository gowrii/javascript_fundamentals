// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


var fortuneTeller = function (numChild, partner, location, job){
"You will be a " +  job + " in " location + ", and married to " + partner + " with " + numChild + " kids."
};

fortuneTeller (3, "blah", "blah", "blah")

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.


var firstPossible = function(currentYear, birthYear){
	var firstPossible = currentYear - birthYear ;
	var secondPossible = firstPossible-- ;
	return ("They are either " + firstPossible + " or " + secondPossible + ".");
};

console.log(firstPossible(2013, 1895))
console.log(firstPossible(2013, 1999))
console.log(firstPossible(2013, 1956))


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
var ageNow= 28

var calculateSupply = function(age, amount){
	var years = age - ageNow ;
	var amountForYear = years * amount ;
	return("You will need " + amountForYear + " to last you until the ripe old age of " + age);
};
console.log(calculateSupply(98,5))


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


var calcCircumfrence = function(radius) {
	var circumfrence = 2(radius * 22/7);
	return("The circumference is " + circumfrence)
};
var calcArea = function(radius){
	var area = 22/7 (radius **);
	return("The area is " + area);
};

console.log(calcCircumfrence(3));
console.log(calcArea(9));


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = function(temp){
	var c = (temp * 9/5) + 32 ;
	return(c + "\u00B0C");
};

var fahrenheit = function(temp){
	var f = (temp - 32) * 5/9 ;
	return(f + "\u00B0F");
};


 console.log(celsius(500));
 console.log(fahrenheit(500));
///unicode escape characters wikipedia     \u
