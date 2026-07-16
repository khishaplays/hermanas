const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log("type of result", typeof result);
    console.log(result);
  })
  .catch((error) => console.error(error));

  /*
code without a promise.
1. create a variable <any name> global variable
2. console.log the value of the variable.
3. create and call a function that modifies this variable
4. console.log( ) the value of the variable
*/

let read = "This read";
console.log("36:", read);       
fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
  })
function testfunc() {
  read = "updated read";
}

testfunc();
console.log("41:", read);       