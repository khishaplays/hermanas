/*
SUBSTRAND: Template Strings, String Interpolation & Mathematical Operators

1. TEMPLATE STRINGS
- Template strings are strings written using backticks (` `) instead of quotes.
- They allow us to create strings that can include variables and expressions easily.
- They make combining text and values cleaner.

Example:normal string concatenation:
*/
let FirstName = "lisa";
let SecondName = "lakhisha";
let Age = 23;
let Country = "Kenya";

let userDetails =
  "My name is " +
  FirstName +
  " " +
  SecondName +
  " and I am " +
  Age +
  " years old. I live in " +
  Country +
  ".";
console.log(typeof userDetails);
//using template strings with backticks and ${} for variable interpolation:
let userDetails2 = `My name is ${FirstName} ${SecondName} and I am ${Age} years old. I live in ${Country}.`;
console.log(userDetails2);

/* 
ASSIGNMENT OPERATOR 
- The assignment operator (=) is used to assign a value to a variable. 
ADDITION OPERATOR (+)
- The addition operator (+) is used to add two numbers or concatenate two strings. 
MULTIPLICATION OPERATOR (*)
- The multiplication operator (*) is used to multiply two numbers. 
DIVISION OPERATOR (/)
- The division operator (/) is used to divide one number by another. 
MODULUS OPERATOR (%)
- The modulus operator (%) is used to find the remainder of a division operation. 
EXPONENTIATION OPERATOR (**)
- The exponentiation operator (**) is used to raise a number to the power of another number. 
*/
let numb1 = 8; //declaring a variable and assigning it a value
console.log(`numb1 is ${numb1}  its type is ${typeof numb1}`); //using template strings to log the value and type of numb1
numb1 = 60; //assigning a new value to the variable numb1
console.log(`numb1 is ${numb1}  its type is ${typeof numb1}`); //using template strings to log the value and type of numb1
numb2 = 20; //declaring a new variable and assigning it a value
console.log(`numb2 is ${numb2}  its type is ${typeof numb2}`);
let numb3 = numb1 + numb2 + 10;
//using the addition operator to add numb1 and numb2 and assign the result to numb3
console.log(`numb3 is ${numb3}  its type is ${typeof numb3}`); //using template strings to log the value and type of numb3
let numb4 = numb1 * numb2; //using the multiplication operator to multiply numb1 and numb2 and assign the result to numb4
console.log(`numb4 is ${numb4}  its type is ${typeof numb4}`);
let numb5 = numb1 ** 3; //2*2*2 power
console.log(`numb5 is ${numb5}  its type is ${typeof numb5}`);
let numb6 = Math.pow(8, 4); //using the Math.pow() method to raise 8 to the power of 4 and assign the result to numb6
