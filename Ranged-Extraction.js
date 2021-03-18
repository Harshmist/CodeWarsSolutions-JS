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
