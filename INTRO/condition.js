/*condition operators 
controls the flow of the values based on acondition in a single line of code
-if else
- else if */

/*scenario 1:declare a variable assign a truthy value 
create an if statement and put the variableinside the if statement.inside the if statement console.log("scenario 1 it run)"
scenario 2:decare variable of your choice assign a falsy value create an if statement and put the variableinside the if statement console.log (scenario 2 it run)
scenario 3: create an if statement inside the if statement condition part.have true
inside the block({})console.log("scenario 3 it run)"

scenario 4:repeat 3 but have false nside if

scenario 5:same as 4 but have condition part 10>20

scenario 6: same as 5 but 20>2*/

// Scenario 1: Truthy value
let name = "Lakhisha codes";

if (name) {
  console.log("Scenario 1 it run");
}

// Scenario 2: Falsy value
let age = NaN;

if (age) {
  console.log("Scenario 2 it run");
}

// Scenario 3: Condition is true
if (true) {
  console.log("Scenario 3 it run");
}

// Scenario 4: Condition is false
if (false) {
  console.log("Scenario 4 it run");
}

// Scenario 5: Condition is 10 > 20
if (10 > 20) {
  console.log("Scenario 5 it run");
}

// Scenario 6: Condition is 20 > 2
if (20 > 2) {
  console.log("Scenario 6 it run");
}
