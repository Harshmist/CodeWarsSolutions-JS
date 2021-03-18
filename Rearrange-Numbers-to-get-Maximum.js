var maxRedigit = function(num) {
  if(num > 0 && num.toString().length == 3){
    return parseInt(num.toString().split("").sort().reverse().join(""));
  } else {
    return null;
    }

};
