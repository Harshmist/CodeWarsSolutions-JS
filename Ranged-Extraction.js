/*A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range
by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not
considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly
formatted string in the range format.*/

function solution(list){
 // TODO: complete solution

  let result = "";
  let isRange = false;

  for (let i = 0; i < list.length; ++i)
  {
    const j = list[i];

    if (list[i + 1] !== j + 1)
    {
      if (isRange) result += (list[i] === list[i - 2] + 2) ? "-" : ",";
      result += j + ",";
      isRange = false;
    }
    else if (!isRange)
    {
      result += j;
      isRange = true;
    }
    debugger;
  }
  return result.slice(0, -1);
}
