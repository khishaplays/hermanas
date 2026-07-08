/*for loop-meant for numbers
combination of using while loop and for loop
*/

function mult() {
  let num1 = Number(prompt("Enter first number (> 1):"));
  let num2 = Number(prompt("Enter second number (> 1):"));

  if (num1 <= 1 || num2 <= 1) {
    console.log("ensure that the numbers are greater than 1");
    return;
  }

  table(num1, num2);
}

function table(num1, num2) {
  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

mult();
