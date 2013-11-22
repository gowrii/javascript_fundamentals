// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var jobTitle = "Creative Director";
var location = "London";
var partner = "Tom Hiddleston";
var numKids = "two";
"You will be a " +  jobTitle + " in " location + ", and married to " + partner + " with " + numKids + " kids.";


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2013;
var birthYear = 1985;

var firstPossible = currentYear - birthYear;
var secondPossible = firstPossible--;


"They are either " + firstPossible " or " secondPossible + ".";



// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 28;
var maxAge = 91;
var maxAmount = 2;

var totalForRestOfLife = (maxAge - currentAge) * maxAmount;
 
"You will need " + totalForRestOfLife + " to last you until the ripe old age of " + maxAge;




// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 2;
var circumfrence = 2(radius * 22/7);
var area = 22/7 (radius **);

"The circumference is " + circumfrence;
"The area is " + area ;




// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
 var temp = 45
 var fahrenheit = (temp - 32) * 5/9

 var celsius = (temp * 9/5) + 32

 console.log(celsius + "°C");
 console.log(fahrenheit + "°F");



