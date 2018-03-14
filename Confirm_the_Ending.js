/*******************************************************************************
* This function compares the ending of a string with a given string. 
* - Developed by Ravi Lamontagne
******************************************************************************/

function confirmEnding(str, target) {
  // Get the last word based on the length of target
  // Search begins from the end due to the negative sign
  var word = str.substr(-target.length);
  
  if (word === target){ // Compare what was found with the actual word.
    return true;
  } else {
    return false;
  }
}
