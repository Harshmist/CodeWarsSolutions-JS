function planeSeat(a){
let arr = [parseInt(a), a.charAt(a.length - 1)];
  let fmb;
  let lmr;

 if (arr[0] <= 20){
   fmb = 'Front';
 } else if (arr[0] <= 40){
   fmb = 'Middle';
 } else if (arr[0] <= 60) {
   fmb = 'Back';
 } else{
   fmb = '';
 }
  if (arr[1] == 'A' || arr[1] == 'B' || arr[1] == 'C'){
    lmr = '-Left';
  } else if (arr[1] == 'D' || arr[1] == 'E' || arr[1] == 'F') {
    lmr = '-Middle';
  } else if (arr[1] == 'G' || arr[1] == 'H' || arr[1] == 'K'){
    lmr = '-Right';
  } else if (arr[1] == 'I' || arr[1] == 'J' || arr[0] > 60){
    lmr = 'No Seat!!';
    fmb = '';
  }
  if (arr[0] > 60 ){
    lmr = 'No Seat!!';
  }

  return fmb+lmr;




}
