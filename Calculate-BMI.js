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
