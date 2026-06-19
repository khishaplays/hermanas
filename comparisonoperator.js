/*
Comparison operators are used to compare two values and return a boolean result (true or false). They are essential in making decisions in programming, such as in if statements and loops. Here are some common comparison operators:

1. Equal to (==): Checks if two values are equal, ignoring type.
2. Strict equal to (===): Checks if two values are equal and of the same type.
3. Not equal to (!=): Checks if two values are not equal, ignoring type.
4. Strict not equal to (!==): Checks if two values are not equal or not of the same type.
5. Greater than (>): Checks if the left value is greater than the right value.
6. Less than (<): Checks if the left value is less than the right value.
7. Greater than or equal to (>=): Checks if the left value is greater than or equal to the right value.
8. Less than or equal to (<=): Checks if the left value is less than or equal to the right value.

Example:
*/
let numb1 = "10"
let numb2 = 10
//string====number-false
//numb1==numb2-type conversion-true
let srtictEqual = numb1 === numb2; // boolean value false because the values are equal but the types are different (string vs number)
console.log(`numb1=${numb1}===numb2=${numb2}; 
    ans=${ srtictEqual} its type is ${typeof srtictEqual}`); // using template strings to log the result
    let nonstrictEqual = numb1 == numb2; // boolean value true because the values are equal and the types are ignored
console.log(`numb1=${numb1}==numb2=${numb2}; 
     ans=${nonstrictEquality} its type is ${typeof nonstrictEquality}`); // using template strings to log the result   