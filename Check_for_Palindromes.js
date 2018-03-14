/*****************************************************************************
* This function checks whether a string is a palindrome. However one must first
* remove every non-alphanumeric character from the string then convert the string 
* to lowercase before testing to see if the string is a palindrome.
* - Developed by Ravi Lamontagne
*********************************************************************************/

function palindrome(str) {
  // Removes all non-alphanumeric characters from the string
  var plainString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverses the string
  var plainStrings = plainString.split("");
  plainStrings.reverse();
  var reverseString = plainStrings.join("");
  
  // Checks to see if the reversed string is the same as the alphanumeric string
  if (plainString === reverseString){
    return true;
  } else {
    return false;
  }
}