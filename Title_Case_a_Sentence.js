/******************************************************************************
* This function returns the provided string with the first letter of each word 
* capitalized and the rest of the word in lower case.
* - Developed by Ravi Lamontagne
*******************************************************************************/


function titleCase(str) {
  var arr = []; 
  var words = str.split(" "); // break down sentence into words
  
  for (var i = 0; i < words.length; i++){
    var chars = words[i].split(""); // break down each word into characters
    var upper = chars[0].toUpperCase(); // capitalize the first character
    var lower = "";
    var newString = "";
    if (chars.length > 1){
      for (var j = 1; j < chars.length; j++){ 
        // ensure that the remaining characters are lowercase
        lower += chars[j].toLowerCase(); 
      }
    }    
    newString += upper + lower; // join the characters back together
  
    arr.push(newString); // add it to the array to allow for the use of the join function
  }
  
  return arr.join(" ");
}

