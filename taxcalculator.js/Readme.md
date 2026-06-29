Tax Calculator
This application calculates an employee’s net salary based on Kenyan statutory deductions.

Deductions Included

1. PAYE (Pay As You Earn)
   PAYE is income tax deducted from an employee’s gross salary according to the Kenya Revenue Authority (KRA) tax bands.

2. NSSF (National Social Security Fund)
   NSSF contributions are calculated using a two-tier system:

Tier I
Tier II
Maximum Contribution 3. SHIF (Social Health Insurance Fund)
SHIF replaced NHIF and is calculated as:

2.75% of gross salary.
Formula
Net Salary = Gross Salary - PAYE - NSSF - SHIF

User Input Validation
Use prompt() to get input from the user.

gross salary
prompt("") – collects user input.
Number() – converts input to a number.
isNaN() – checks if the value is not a number.
while loop – keeps asking for input until valid data is entered.
Validation Rules
Input should not be empty.
Input should be a number.
Input should be greater than zero.
Keep prompting until a valid value is entered.

PAYE (Pay As You Earn)
Tax charged on taxable income.
Calculated using tax bands.
Different portions of income are taxed at different rates.
Total PAYE is reduced by Personal Relief.

### NSSF

-Tier 1 -6%=90000
-Tier 2-6%=9k-108k
-max is 6480
..employer matches employees contribution

// NSSF Calculation

let nssf;

// If salary is 8,000 or less
if (grossSalary <= 8000) {
// Employee contributes 6% of salary
nssf = grossSalary \* 0.06;
}

// If salary is between 8,001 and 72,000
else if (grossSalary <= 72000) {
// Tier I contribution + Tier II contribution
nssf = (8000 _ 0.06) + ((grossSalary - 8000) _ 0.06);
}

// If salary is above 72,000
else {
// Maximum employee contribution
nssf = 4320;
}

// Display NSSF deduction
console.log("NSSF: KES " + nssf);
