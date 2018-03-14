/*******************************************************************************
* Function to reverse any string. Note that if you would rather reverse words in
* a string use str.split(" "); and myStrings.join(" "); instead.
* - Developed by Ravi Lamontagne
********************************************************************************/



function reverseString(str) {
  var myStrings = str.split("");
  myStrings.reverse();
  str = myStrings.join("");
  
  return str;
}