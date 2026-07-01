/*
named functions-has its own name and can be called by its name*/

function circleArea(r) {
  const pie = 3.142;
  let area = pie * r * r;
  return area;
}
let age = 21;

let khishasAge = 25;

let ac = circleArea(5);
console.log(ac);
console.log(typeof ac);
//2.anonymous function- has no name and can be assigned to a variable
let cubevolume = function (side) {
  return side * side * side;
};
let volume = cubevolume(5);

console.log(volume);
console.log(typeof volume);
console.log(typeof cubevolume);
