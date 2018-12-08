/*

Author Manuel Espinosa Torres

freeCodeCamp exercise: "JavaScript Algorithms and Data Structures Projects: Palindrome Checker"

Description:
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Notes:
- You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
- We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
- We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/

function palindrome(str) {
  var strWithoutSymbols = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  var aux = strWithoutSymbols.length - 1;
  	for(var i = 0; i < strWithoutSymbols.length / 2; i++){
    	if(strWithoutSymbols[i] == strWithoutSymbols[aux]){
      		aux--;
      		continue;
    	} else {
      		return false;
    	}
	}

	return true;
}

var words = ["eye",
  "not a palindrome",
  "A man, a plan, a canal. Panama",
  "never odd or even",
  "almostomla",
  "My age is 0, 0 si ega ym."]

for(var i = 0; i < words.length; i++){
  if(palindrome(words[i])){
    console.log("'" + words[i] + "' is palindrome.");
  } else {
    console.log("'" + words[i] + "' is not palindrome.");
  }
}
