/*typeof returns the type of a variable 
-number
-string
-boolean
-object
-function
-undefined
*/

let numb1 = 23;
console.log("numb1", numb1, "its type is", typeof numb1); //number
let strNumb = "700";
console.log("strNumb", strNumb, "its type is", typeof strNumb);
let myName = "khisha";
console.log("myName", myName, "its type is", typeof myName);
let isListening = true;
console.log("isListening", isListening, "its type is", typeof isListening);
let nullval = null; //type of <null> is object because it is a special value that represents the absence of any object value.
console.log("nullval", nullval, "its type is", typeof nullval);
let unvalue; //undefined because it has not been assigned a value.
console.log("unvalue", unvalue, "its type is", typeof unvalue);

const bonus = "800";
const salary = 5000;
const salarygross = salary + bonus; //instructions

//console.log(grossSalary) ! -to log the gross salary
console.log("Gross Salary", salarygross, "its type is", typeof salarygross); //to log the gross salary with a label
//tax calculation
const paye = salarygross * 0.16; //this is 16%tax
console.log("the paye tax is", paye); //to log the paye tax with a label
const nhif = 2500;
console.log("the nhif deduction is", nhif); //to log the nhif deduction with a label
const sha = 2500;
console.log("the sha deduction is", sha); //to log the sha deduction with a label
const totalDeductions = paye + nhif + sha; //calculating total deductions
console.log("the total deductions are", totalDeductions); //to log the total deductions with a label
const netSalary = salarygross - totalDeductions; //calculating net salary
console.log("the net salary is", netSalary); //to log the net salary with a label
