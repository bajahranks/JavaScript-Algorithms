/*******************************************************************************
* This function breaks and array in groups of size. For arrays in which the 
* length of the array is not fully divisible by size then the last group will be 
* the size of the remainder. Return a two-dimensional array.
********************************************************************************/

function chunkArrayInGroups(arr, size) {
  var subArray = [];
  var index = size;
  
  for (var i = 0; i < arr.length; i+=size){
    if (index >= arr.length){
      subArray.push(arr.slice(i));
    } else {
      subArray.push(arr.slice(i, index));
      index += size;
    }      
  }
  return subArray; 
}
