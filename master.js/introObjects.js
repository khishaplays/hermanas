/*objects
these are complex data structures 
*/
//Exercise one:

const machine = {
  type: "car",
  model: "lexus LX 700H",
  engine: "3.4L twin turbo Hybrid V6",
  speed: 210,
  color: "pearl white",
  manufacturer: {
    name: "Lexus",
    headquarters: "Toyota City, Japan",
  },
  horsepower: 457,
  it_is_a_classic: true,
};
alert_info = function () {
  alert(
    `car type: ${machine.type}
      car model: ${machine.model} 
      car engine: ${machine.engine} 
      car speed: ${machine.speed} 
       car color: ${machine.color} \n 
       car horsepower: ${machine.horsepower} 
       is it a classic? : ${machine.it_is_a_classic}
     country of origin: ${machine.country}`,
  );
  machine.fun_fact = "Powered by luxury and a little bit of showing off.";
  console.log(machine);
};
alert_info();
