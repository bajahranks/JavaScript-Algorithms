/*****************************************************************************
* This function finds the length of the longest word in a given string.
* - Developed by Ravi Lamontagne
*****************************************************************************/

function findLongestWord(str) {
  // Place each word into an array
  var words = str.split(" ");
  var longest = 0;
  
  // Iterate through the array checking the length of each item. If the length is higher
  // than the previous then store that value.
  for (var i = 0; i < words.length; i++){
    if (words[i].length > longest){
      longest = words[i].length;
    }
  }
  return longest;
}