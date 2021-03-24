/*Write function bmi that calculates body mass index (bmi = weight / height2).
bmi <= 18.5 return "Underweight"
bmi <= 25.0 return "Normal"
bmi <= 30.0 return "Overweight"
bmi > 30 return "Obese"*/

function bmi(weight, height) {
  let heightSquared = height * height;
  let bmiCalc = weight / heightSquared;

  if (bmiCalc <= 18.5){
    return "Underweight";
    } else if (bmiCalc <= 25){
        return "Normal";
      } else if (bmiCalc <= 30){
        return "Overweight";
      } else if (bmiCalc > 30){
        return "Obese";
      }
    }
