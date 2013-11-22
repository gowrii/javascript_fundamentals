// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

	var greaterNum = function(x,y) {
		if (x > y) {
			return(x);
		} else {
			return(y);
		}
	};

	console.log(greaterNum(4,92));
	console.log(greaterNum(98,5));


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(l) {
		if (l === "en") {
			return("Hello World");
		} 
		else if (l === "fr") {
			return("Allo tous La Monde");
		} 
		else if (l === "es") {
			return("Hola Mundo");
		}
	};

console.log(helloWorld("es"));
console.log(helloWorld("en"));
console.log(helloWorld("fr"));

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(x){
	if (x > 90) {
		return("A");
	}
	else if (x > 79 && x < 90) {
		return("B");
	}
	else if (x >74 && x < 80) {
		return("C");
	}
	else if (x > 65 && x < 75) {
		return("D");
	}
	else { return("F");
	}
};

console.log(assignGrade(78))
console.log(assignGrade(92))
console.log(assignGrade(63))

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var Pluralizer = function(noun, number){
	if (number > 1){
		return(number + " " + noun + "s");
	}
	else {
		return(number + " " + noun);
	}

	};

	console.log(Pluralizer("bat", 5))

