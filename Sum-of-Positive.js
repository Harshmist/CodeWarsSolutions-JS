/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
  let newArr=[];

  let i;
  if (arr.length == 0){
    return 0;
  }

  for (i=0; i<arr.length; i++){
    if (arr[i] > 0){
      newArr.push(arr[i]);
    } else if (arr[i] <=0){
      newArr.push(0);
    }
  }
  return newArr.reduce((a, b) => a + b, 0);
}
