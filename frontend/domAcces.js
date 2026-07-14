/*1. Accessing DOM Elements using:
querySelector
document.getElementById:grab element withthe specified id.
create a variable assign it to the dom element with div id of "div1"
consolelog this element view in the browser console.
2. getElementByClassName: grab all elements with the specified class name.
create a variable assign to the dom with class<list-item>
console.log this you should be able to hover over the element
for the class use the .console to view the browser console
only get the first list item use query selector
*/

// Get element by ID
const div1 = document.getElementById("div1");
console.log(div1);

// Get all elements with class "list-item"
const listItems = document.getElementsByClassName("list-item");
console.log(listItems);

// Loop through the list items using a while loop
let i = 0;
while (i < listItems.length) {
  console.log(listItems[i]);
  i++;
}

// Get only the first list item using querySelector
const firstListItem = document.querySelector(".list-item");
console.log(firstListItem);

/* using for loop
const listItems = document.getElementsByClassName("list-item");

for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i]);
}
    update dom elements
    inner html 
    outer html
    3 buttons:original replace update */
const otheritems = ["kiwi", "pineapple", "Dragon Fruit"];
const originalDiv = document.querySelector("#div1").innerHTML;

function original() {
  console.log("original clicked ");
  //resets the div to its original value
  document.querySelector("#div1").innerHTML = originalDiv;
}
function replace() {
  console.log("replace clicked");
  //some html
  const newhtml = `
  <h3> list drinks</h3>
  <ul> 
  <li class="list-item"> orange water</li>
  <li class="list-item"> orange water</li>
  <li class="list-item"> orange water</li>
  </ul>`;
  document.querySelector("#div1").innerHTML = newhtml;
}
function update() {
  console.log("update clicked");
}
