function createPhoneNumber(numbers){
   let numJoined = numbers.join('');
  let firstNum = numJoined.slice(0, 3);
  let secondNum = numJoined.slice(3, 6);
  let thirdNum = numJoined.slice(6, 10);

  return `(${firstNum}) ${secondNum}-${thirdNum}`;

}
