function findScreenHeight(width, ratio) {
let x = parseInt(ratio);
  let lowNumberOfString = ratio.charAt(ratio.length - 1);
  let lowNum = parseInt(lowNumberOfString);
  let divided = width / x;
  let lowNumByDiv = lowNum * divided;


  return width.toString() + "x" + lowNumByDiv.toString();

}
