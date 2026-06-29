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

// NSSF Calculation
let nssf;

// If salary is 9,000 or less
if (grossSalary <= 9000) {
  nssf = grossSalary * 0.06;
}

// If salary is between 9,001 and 108,000
else if (grossSalary <= 108000) {
  nssf = 9000 * 0.06 + (grossSalary - 9000) * 0.06;
}

// If salary is above 108,000
else {
  nssf = 6480; // Maximum employee contribution
}

// Display NSSF deduction
console.log(`NSSF: KES ${nssf}`);

// Calculate taxable pay
let taxablePay = grossSalary - nssf;

console.log(`Taxable Pay: KES ${taxablePay}`);

// SHIF (2.75% of gross salary)
let shif = grossSalary * 0.0275;

// Housing Levy (1.5% of gross salary)
let housingLevy = grossSalary * 0.015;

console.log(`SHIF: KES ${shif}`);
console.log(`Housing Levy: KES ${housingLevy}`);
alert(
  `Gross Salary: KES ${grossSalary}
NSSF: KES ${nssf}
Taxable Pay: KES ${taxablePay}
PAYE: KES ${paye}
SHIF: KES ${shif}
Housing Levy: KES ${housingLevy}`,
);
