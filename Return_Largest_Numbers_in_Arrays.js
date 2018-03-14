/*****************************************************************************
* This function returns an array with the largest number within each sub-array 
* of an array. - Developed by Ravi Lamontagne
******************************************************************************/

function largestOfFour(arr) {
  
  var highestArray = [];
  
  for (var i = 0; i < arr.length; i++){
    var highest = 0;
    for(var j = 0; j < arr[i].length; j++){
      if (highest < arr[i][j]){
        highest = arr[i][j]; 
      }
      highestArray[i] = highest;
    }
  }
  return highestArray;
}