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
