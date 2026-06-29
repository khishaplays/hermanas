/*functions*/

//a function excecutes only when called

//calling a function
function timeAlert() {
  const date = new Date();
  alert(
    `time stamp: ${date.toLocaleString("en-KE", { timeZone: "AFRICA/NAIROBI" })}`,
  );
}
timeAlert();

//to call a function use name then ()
function areaOfTriangle(lenghth, width) {
  console.log(`base, height is ${base} its type ${typeof base}`);
  console.log(`height is ${height} its type ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(
    `For triangle with base  ${base} and height ${height} area is${area}`,
  );
}
//scenario 4;
function areaOfTriangle(base, height) {
  console.log(`Base is ${base}, its type is ${typeof base}`);
  console.log(`Height is ${height}, its type is ${typeof height}`);

  const area = 0.5 * base * height;

  console.log(
    `For triangle with base ${base} and height ${height}, area is ${area}`,
  );
}

let base1 = 50;
let height1 = 60;

areaOfTriangle(base1, height1);
//scenario 5;

function areaOfTriangle(base, height) {
  console.log(`Base is ${base}, its type is ${typeof base}`);
  console.log(`Height is ${height}, its type is ${typeof height}`);

  const area = 0.5 * base * height;

  console.log(
    `For triangle with base ${base} and height ${height}, area is ${area}`,
  );
}

let base2 = "khisha";
let height2 = true;

areaOfTriangle(base2, height2);
