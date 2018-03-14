/*****************************************************************************
* This function removes all the values passed as arguments that can be found
* in the first argument. - Developed by Ravi Lamontagne
******************************************************************************/

function destroyer(arr) {  
  // ES2015 - const args = Array.from(arguments);
  var newArray = Array.prototype.slice.call(arguments);
  
  for (var i = 0; i < arr.length; i++){
    for (var j = 1; j < newArray.length; j++){
      if (arr[i] === newArray[j]){
        arr.splice(i, 1);
        i--;
        break;
      } 
    }
  }
  return arr;
}
