/*

Author: Manuel Espinosa Torres

freeCodeCamp JavaScript Algorithms and Data Structures Projects:
Exercise: "Caesars Cipher"

Description:
One of the simplest and most widely known ciphers is a Caesar cipher, also known
as a shift cipher. In a shift cipher the meanings of the letters are shifted by
some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write
your own code.

*/

function rot13(str) { // LBH QVQ VG!
	var aux = "";
	for(var i = 0; i < str.length; i++){
    	var charUnicode = str.charCodeAt(i);
    	if(charUnicode < 65 || charUnicode > 90){
        	// Do nothing.
        } else if((charUnicode - 13) >= 65){
        	charUnicode = charUnicode - 13;
        } else {
        	charUnicode = charUnicode + 13;
        }

        aux += String.fromCharCode(charUnicode);
    }

  	return aux;
}

var phrases = ["SERR PBQR PNZC",
  "SERR CVMMN!",
  "SERR YBIR?",
  "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."]

for(var i = 0; i < phrases.length; i++){
	console.log("The result of deciphering '" + phrases[i] + "' is: " + rot13(phrases[i]));
}

console.log(rot13("SERR CVMMN"));
