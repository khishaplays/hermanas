## Variables

Variables are used to store data that a program can use and update when needed.
Each Data has a typethat is;datatype

### Primitive Data Types

JavaScript has several primitive data types:

- String – stores text
- Number – stores numbers
- Boolean – stores true or false values
- Undefined – a variable that has been declared but not assigned a value
- Null – represents an intentional empty value
- BigInt – stores very large integers
- Symbol – stores unique identifiers


### Strings-stores sequence of characters /text.

Ways of creating strings:
1. using single quotes
2. using double quotes
3. using backticks

-HERE ARE SOME EXAMPLES!
let str1='khisha types'-single quotes
let str2="khisha codes"-double quotes
let str3=`khisha learns`-backticks

### Numbers-stores numeric values like shown below:
Numbers.
floating point number:
real nummbers
positive
negative numbers

let number1=23 -real number
let number2=34.34 -floating number
let number3=-5 -negative number


### Next is-Boolean:represents true or false values.
let khishaIsListening=true;
console.log(khishaIsListening);
let khishaIsSleeping=false;
console.log(khishaIsSleeping);

### Difference Between Undefined and Null

Undefined:
- A variable has been declared but has no value assigned.
Undefined:represents the absence of a value or the absence of a variable.
 It is a primitive data type that has only one value: undefined.
  It is used to indicate that a variable has not been assigned a value or that an object property does not exist.
 Note: never explicitly assign undefined to a variable. 
 It is better to use null to indicate the absence of a value.

Example:

let age;
console.log(age);

Null:
- A variable has been intentionally assigned an empty value.
Null:represents the absence of any value.
 It is a primitive data type that has only one value: null.
  It is used to indicate that a variable has no value or that an object property does not exist.
Example:

let age = null;
console.log(age);