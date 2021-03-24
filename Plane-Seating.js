/*Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive,
realise again just how little leg room you get, and sort of climb into the seat covered in a pile
of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the
letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane
where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K
with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.*/

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
