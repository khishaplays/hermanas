//practical project
// Function to calculate the area of a circle
function circleArea(r) {
  const pi = 3.142;
  return pi * r * r;
}

// Function to calculate the area of a rectangle
function rectangleArea(l, w) {
  return l * w;
}

// Function to calculate the area of a triangle
function triangleArea(b, h) {
  return 0.5 * b * h;
}

// Testing the functions
console.log("Area of Circle:", circleArea(1.5));
console.log("Area of Rectangle:", rectangleArea(10, 5));
console.log("Area of Triangle:", triangleArea(9, 6));

function shape(fn, shapeName, s1, s2, s3) {
  // Display each parameter and its data type
  console.log("Function:", fn);
  console.log("Type:", typeof fn);

  console.log("Shape Name:", shapeName);
  console.log("Type:", typeof shapeName);

  console.log("Value 1:", s1);
  console.log("Type:", typeof s1);

  console.log("Value 2:", s2);
  console.log("Type:", typeof s2);

  console.log("Value 3:", s3);
  console.log("Type:", typeof s3);

  // Call the function that was passed in
  let area = fn(s1, s2, s3);

  // Display the answer
  console.log(shapeName + " Area = " + area);
}

// Test the functions

shape(areaCircle, "Circle", 10);

shape(areaRectangle, "Rectangle", 10, 5);

shape(areaTriangle, "Triangle", 8, 6);
