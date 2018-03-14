/*****************************************************************************
* This function repeats a string based on the number of times specified.
* - Developed by Ravi Lamontagne
******************************************************************************/


function repeatStringNumTimes(str, num) {
  var newString = str;
  
  if (num <= 0){
    return "";
  } else if (num === 1){
    return str;
  } else {
    for (var i = 2; i <= num; i++){
      newString += str;
    }
    return newString;
  }
  
}
