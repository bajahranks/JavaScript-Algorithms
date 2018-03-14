/****************************************************************************
* This function returns true if the string in the first element of the array 
* contains all of the letters of the string in the second element of the array.
* - Developed by Ravi Lamontagne
******************************************************************************/

function mutation(arr) {
  var index;
  var found = true;
  
  for (var i = 0; i < arr[1].length; i++){
    index = arr[0].toLowerCase().indexOf(arr[1].charAt(i).toLowerCase());
    if (index === -1){
      found = false;
      break;
    } 
  }
  if (found){
    return true;
  } else {
    return false;
  }
}
