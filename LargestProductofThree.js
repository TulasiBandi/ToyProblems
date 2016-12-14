// Largest Product of Three
// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

// Examples
// Input	Output
// array:
// [ 2, 1, 3, 7 ]	42
// array:
// [ 0, 2, 3 ]	0


function largestProductOfThree (array) {
var newarr = array.sort(function(a, b) {
  return a - b;
});

var option1 = newarr[newarr.length-1]*newarr[newarr.length-2]*newarr[newarr.length-3];
var option2 = newarr[0]*newarr[1]*newarr[newarr.length-1]; 

  if (option1>option2){
    return option1;
  }
  else{
    return option2;
  }
}
