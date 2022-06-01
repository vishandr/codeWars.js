/*https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// with else - if construction:

function bmi(weight, height) {
  let index = weight / Math.pow(height, 2);
  if (index <= 18.5) { 
    return "Underweight";
  }else if (index <= 25.0) {
    return "Normal";
  }else if (index <= 30.0){
    return "Overweight";
  } else return "Obese";
}

// or this way:
function bmi(weight, height) {
  let index = weight / Math.pow(height, 2);
return (index <= 18.5) ? "Underweight" :
       (index <= 25.0) ? "Normal" :
      (index <= 30.0) ? "Overweight" : "Obese";
}]
