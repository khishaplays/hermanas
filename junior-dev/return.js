// return function
function sayMyName() {
  return false;
  let first_name = "khisha";

  console.log(`First Name ${first_name}`);
  let second_name = "lisah";
  console.log(`second Name ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
  return;
}

let sayMyNameValue = sayMyName();
console.log(`function returned ${sayMyNameValue}`);
