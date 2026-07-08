/*
loops: counts a block of code over and over again until a certain condition is met
while loop: a while loop will continue to run as long as the condition is true
*/
//example: count to 30 using a while loop

let k = 0;
let condition = true;

while (condition) {
  console.log("k is", k);
  k = k + 1;
  if (k > 30) {
    condition = false;
  }
}
//countdown from 30 to 0 using a while loop
function count(k) {
  while (k >= 1) {
    console.log("k is", k);
    k = k - 1;
  }
}
count(30);
//multiplication table using a while loop
// Function 1: No parameters
// Function to start the program
function mult() {
  let number1 = Number(prompt("Enter first number (> 1):"));
  let number2 = Number(prompt("Enter second number (> 1):"));

  // Keep asking until input is valid
  while (true) {
    if (number1 > 1 && number2 > 1) {
      break;
    }

    alert("Please enter numbers greater than 1.");

    number1 = Number(prompt("Enter first number (> 1):"));
    number2 = Number(prompt("Enter second number (> 1):"));
  }

  table(number1, number2);
}

function table(number1, number2) {
  if (number1 <= 1 || number2 <= 1) {
    console.log("Please enter valid numbers greater than 1.");
    return;
  }

  let outerloop = number1;

  while (outerloop > 0) {
    let innerloop = number2;

    while (innerloop > 0) {
      console.log(`${outerloop} * ${innerloop} = ${outerloop * innerloop}`);
      innerloop = innerloop - 1;
    }

    outerloop = outerloop - 1;
  }
}

// Start the program
mult();
