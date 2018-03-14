/****************************************************************************
* This function returns the lowest index at which a value should be inserted
* into an array once it has been sorted. - Developed by Ravi Lamontagne
*****************************************************************************/

function getIndexToIns(arr, num) {
  var newArray = Array.prototype.slice.call(arr);
  newArray = newArray.sort(function(a, b) {
    return a - b;
  });
  
  var index;
  
  for (var i = 0; i < newArray.length; i++){
    if (num <= newArray[i]){
      index = i;
      return index;
    }  
  }
  if (!index){
    index = newArray.length;
    return index;
  }
}
