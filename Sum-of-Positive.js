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
