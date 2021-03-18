function evenLast(numbers) {
  // Good luck
  let newArr = [];
  let i;
  let arrSum;

  for (i=0; i < numbers.length; i++){
    if (i % 2 == 0){
      newArr.push(numbers[i]);
    }
  }
  arrSum = newArr.reduce((a, b) => a + b, 0);
  if (numbers.length == 0){
    return 0;} else{
  return arrSum * (numbers[numbers.length - 1]);
      }

}
