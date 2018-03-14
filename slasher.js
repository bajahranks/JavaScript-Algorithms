/*****************************************************************************
* This function removes a given amount of elements from an array and returns
* the remaining elements. - Developed by Ravi Lamontagne
******************************************************************************/

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}