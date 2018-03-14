/******************************************************************************
* This function cracks Ceasers Cipher. Each letter is shifted 13 spots.
* - Developed by Ravi Lamontagne
*******************************************************************************/

function rot13(str) { 
  var newString = "";
  
  for (var i = 0; i < str.length; i++){
    if(str[i].match(/\w/)){
      if (str.charCodeAt(i) + 13 > 90){
        var charCode = 64 + (str.charCodeAt(i) + 13 - 90);
        newString += String.fromCharCode(charCode);
      } else {
        newString += String.fromCharCode(str.charCodeAt(i) + 13);
      }       
    } else {
      newString += str[i];
    }
  }
  return newString;
}