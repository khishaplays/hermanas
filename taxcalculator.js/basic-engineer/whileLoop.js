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
