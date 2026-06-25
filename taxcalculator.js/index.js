/* 
prompt("")
1.is NaN
2.number
3.+<>
*/
//stay her till users enter correct details

let grossSalary = null;

while (true) {
  let gross = prompt("Enter your gross salary");

  if (!isNaN(gross)) {
    gross = Number(gross);

    if (gross > 0) {
      grossSalary = gross;
      break;
    }
  }

  alert("Invalid amount entered. Enter a number greater than 0");
}

console.log(`Gross salary is ${grossSalary}, type is ${typeof grossSalary}`);

// PAYE calculation
// PAYE calculation
let paye;

if (grossSalary <= 24000) {
  paye = grossSalary * 0.1;
} else if (grossSalary <= 32333) {
  paye = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
} else if (grossSalary <= 500000) {
  paye = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
} else if (grossSalary <= 800000) {
  paye =
    24000 * 0.1 +
    (32333 - 24000) * 0.25 +
    (500000 - 32333) * 0.3 +
    (grossSalary - 500000) * 0.325;
} else {
  paye =
    24000 * 0.1 +
    (32333 - 24000) * 0.25 +
    (500000 - 32333) * 0.3 +
    (800000 - 500000) * 0.325 +
    (grossSalary - 800000) * 0.35;
}

console.log(`PAYE is ${paye}`);
