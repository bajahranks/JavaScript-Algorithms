/*****************************************************************************
* This function truncates a string given a particular number. If the num is 
* less than or equal to 3, then return the truncated string followed by "..."
* If the number is less than the length of the string then truncate and use 
* "..." as part of the length of the truncation. Otherwise print the original 
* string. - Developed by Ravi Lamontagne.
*****************************************************************************/

function truncateString(str, num) {
  
  if (num <= 3){
    return str.slice(0, num) + "...";
  } else if (str.length > num){
    var newLength = num - 3;
    return str.slice(0, newLength) + "...";
  } else {
    return str;
  }
}