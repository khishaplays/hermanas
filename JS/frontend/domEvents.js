/* 
events 
get notified when something happens
when an event happens you get a callback

click 
hovering 
how an event is attached :
before attaching an even you must be able to access the element*/

function clickAlert(e) {
  console.log(e);
  alert("Hey its khisha");
}
document.querySelector("btn-event-cheker").addEventListener("click");
//dom events:onclick,beforeprint..click ..cut
document.addEventListener("click,clickAlert");

document.querySelector("btn-event-cheker").addEventListener("click");

document.addEventListener("mouseover", mouseoverAlert);
window.addEventListener("mousemove", (e) => {
  //console.log("x , direction", clientX.);
  // console.log("y , direction", clientY.);
  document.getElementById("x-b").innerText = e.clientX;
  document.getElementById("y-b").innerText = e.clientY;
});
