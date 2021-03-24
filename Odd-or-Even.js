/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).*/

function oddOrEven(array) {
   //enter code here
  let num1 = parseInt(array[0]);
  let num2 = parseInt(array[1]);
  let num3 = parseInt(array[2]);

let sum = (num1 + num2 + num3);

  if ((sum % 2) == 0 && array.length > 2){
    return "even"
  } else if (array.length < 2 && parseInt(array[0]) < 1){
    return "even";
  } else if (array[0] == null){
    return "even";
  }else {
    return "odd";
  }
  }
