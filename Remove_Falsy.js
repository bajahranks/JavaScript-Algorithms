/*******************************************************************************
* This function removes all falsy values in JavaScript (false, null, 0, "", 
* undefined, and NaN) from an array. - Developed by Ravi Lamontagne
*******************************************************************************/
function bouncer(arr) {
  return arr.filter(function (item){
   return (item);
  }); 
}

/*function falsy(item){
  return (item);
}*/