/*Console.log() is a function in JavaScript that outputs messages to the web console.
 It is commonly used for debugging purposes, allowing developers to log information about the state of their application, variables, or any other relevant data.
 developers should ensure they write consoles in a way that is clear and informative, avoiding excessive or unnecessary logs that can clutter the console and make it difficult to identify important information. 
 Additionally, it's good practice to remove or comment out console.log statements in production code to prevent exposing sensitive information or affecting performance.*/


 /*example usage of console.log()to calculate net salary 
*/
const grossSalary = 5000;//instructions
//console.log(grossSalary) ! -to log the gross salary
console.log("Gross Salary:", grossSalary); //to log the gross salary with a label
//tax calculation
const paye=grossSalary * 0.16; //this is 16%tax
console .log("the paye tax is", paye); //to log the paye tax with a label
const nhif=2500
console.log("the nhif deduction is", nhif); //to log the nhif deduction with a label
const sha=2500
console.log("the sha deduction is", sha); //to log the sha deduction with a label
const totalDeductions=paye+nhif+sha; //calculating total deductions
console.log("the total deductions are", totalDeductions); //to log the total deductions with a label
const netSalary=grossSalary-totalDeductions; //calculating net salary
console.log("the net salary is", netSalary); //to log the net salary with a label