/*scope */
//global scope-simply means it can be used anywher in the program

/*const pie = 3.142;

function areaCircle(r) {
  let area = pie * r * r;
  return area;
}

let result = areaCircle(5);

console.log(result);
*/
//practical procedure
let name = "Khisha";

function sayMyName() {
  console.log(`Name ${name} line 19`);

  if (true) {
    let name = "lakhisha";
    console.log(`Name ${name} line 23`);
  }

  console.log(`Name ${name} line 27`);
}

sayMyName();

console.log(`Name ${name} line 30`);
