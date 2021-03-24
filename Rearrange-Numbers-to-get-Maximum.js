/*Create function that takes one positive three digit integer and rearranges its digits to get maximum
possible number. Assume that argument is integer. Return null if argument is not valid.

maxRedigit(123); // returns 321*/

var maxRedigit = function(num) {
  if(num > 0 && num.toString().length == 3){
    return parseInt(num.toString().split("").sort().reverse().join(""));
  } else {
    return null;
    }

};
