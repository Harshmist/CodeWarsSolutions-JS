/*Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string
written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.*/

function findScreenHeight(width, ratio) {
let x = parseInt(ratio);
  let lowNumberOfString = ratio.charAt(ratio.length - 1);
  let lowNum = parseInt(lowNumberOfString);
  let divided = width / x;
  let lowNumByDiv = lowNum * divided;


  return width.toString() + "x" + lowNumByDiv.toString();

}
