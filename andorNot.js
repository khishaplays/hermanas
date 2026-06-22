/*And Operator */
//truth table..possible values of a combination 
//true && true = true
//true && false = false
//false && true = false
//false && false = false
/*here is an example of using the AND operator in JavaScript:
*/
let val1 = false;
let val2 = true;
let result = val1 && val2; // result will be false because one of the values is false
console.log(`val1=${val1}  val2=${val2} val1&&val2=${val1&&val2}`)

let khisha_age=20
let khisha_balance=40000

//if khisha is age is greater than 25 and has more than 20k in her account
let is_greater_than_25=khisha_age>25 //true or false
console.log(`is mercy age greater than 25 ${is_greater_than_25}`)
let has_more_than_20k=khisha_balance>20000
console.log(`khisha has more than 20k ${has_more_than_20k}`)
console.log(`khisha is age is greater than 25 and has more than 20k in her account${is_greater_than_25}`)
//khisha_age>25&&khisha_balance>20000

let simplified=khisha_age>age25&&khisha_balance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplification is${khisha_age>25&&khisha_balance>20000}`)
/*Not Operator */

