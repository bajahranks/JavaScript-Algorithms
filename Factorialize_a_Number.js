/****************************************************************************
* Function to find the factorial of any integer. The function uses a recursive
* approach to find the solution.
*****************************************************************************/


function factorialize(num) {
  if(num === 0 || num === 1){
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}