const machine = {
  type: "car",
  model: "Lexus LX 700H",
  engine: "3.4L Twin Turbo Hybrid V6",
  speed: 210,
  color: "Pearl White",

  manufacturer: {
    name: "Lexus",
    headquarters: "Toyota City, Japan",
    country: "Japan",
  },

  horsepower: 457,
  it_is_a_classic: true,

  fun_fact: "Powered by luxury and a little bit of showing off.",

  alert_info: function () {
    alert(`Car type: ${machine.type}
Car model: ${machine.model}
Car engine: ${machine.engine}
Car speed: ${machine.speed} km/h
Car color: ${machine.color}
Car horsepower: ${machine.horsepower} hp
Is it a classic?: ${machine.it_is_a_classic}
Country of origin: ${machine.manufacturer.country}

Fun fact: ${machine.fun_fact}`);
  },
};

// Calling the function
/*machine.alert_info();

console.log(`Machine datatype: ${typeof machine}`);
console.log(machine);

console.log("-- Using console.table() --");
console.table(machine);*/
//acces individual properties of the object
//1. Accessing properties using dot notation
//2. Accessing properties using bracket notation
//exampe
/*using dot notation*/
console.log(`Car type: ${machine.type}`);
console.log(`Car model: ${machine.model}`);
console.log(`Car engine: ${machine.engine}`);
console.log(`Car speed: ${machine.speed} km/h`);
console.log(`Car color: ${machine.color}`);
console.log(`Car horsepower: ${machine.horsepower} hp`);
console.log(`Is it a classic?: ${machine.it_is_a_classic}`);
console.log(`Country of origin: ${machine.manufacturer.country}`);
console.log(`Fun fact: ${machine.fun_fact}`);

/*using bracket notation*/
console.log(`Car type: ${machine["type"]}`);
console.log(`Car model: ${machine["model"]}`);
console.log(`Car engine: ${machine["engine"]}`);
console.log(`Car speed: ${machine["speed"]} km/h`);
console.log(`Car color: ${machine["color"]}`);
console.log(`Car horsepower: ${machine["horsepower"]} hp`);
console.log(`Is it a classic?: ${machine["it_is_a_classic"]}`);
console.log(`Country of origin: ${machine["manufacturer"]["country"]}`);
console.log(`Fun fact: ${machine["fun_fact"]}`);
