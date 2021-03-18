function highAndLow(numbers){
  // ...
  let toArr = numbers.split(" ");
  let newArr = [];
  let i;
  let sorted;

  //Pushing each item of the array as an integar to a new array to be sorted
  for (i=0; i<toArr.length; i++){
    if (i < toArr.length){
      newArr.push(parseInt(toArr[i]));
    }
  }
  //Sorting array in ascending order
  sorted = newArr.sort(function(a, b) {
  return a - b;
});

  return `${sorted[sorted.length-1]} ${sorted[0]}`;

}
