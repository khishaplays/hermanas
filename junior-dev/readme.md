## RETURN STATEMENTS IN JAVASCRIPT

What is a return statement?

- A return statement is used inside a function.
- It sends a value back to where the function was called.

Syntax:

function functionName() {
return value;
}

Why use return?

- Sends a result back to the caller.
- Ends the function immediately.
- Allows the returned value to be stored in a variable or used later.

Example:

function add(a, b) {
return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8

A function without return

If a function does not have a return statement,
JavaScript automatically returns undefined.

Example:

function greet() {
console.log("Hello");
}

let message = greet();

console.log(message);

Output:
Hello
undefined

Returning a value

function multiply(x, y) {
return x \* y;
}

let answer = multiply(4, 6);

console.log(answer); // 24

Return stops the function.

Any code written after return
inside the same function will NOT run.

Example:

function example() {
console.log("Start");

    return;

    console.log("End");

}

Output:
Start

Returning strings

function greet(name) {
return "Hello " + name;
}

Returning booleans

function isAdult(age) {
return age >= 18;
}

Returning objects

function createStudent() {
return {
name: "Khisha",
age: 20
};
}

Returning arrays

function numbers() {
return [10, 20, 30];
}

Returning from a conditional

function checkNumber(number) {

    if (number > 0) {
        return "Positive";
    }

    return "Zero or Negative";

}

Using the returned value

function square(number) {
return number \* number;
}

let result = square(10);

console.log(result);

Multiple return statements

A function can have multiple return statements,
but only ONE will execute because
the function stops immediately after return.

Example:

function grade(score) {

    if (score >= 80) {
        return "A";
    }

    if (score >= 60) {
        return "B";
    }

    return "C";

}

Returning nothing

function stop() {
return;
}

This simply ends the function
and returns undefined.

Common mistake

Forgetting to use the returned value.

Incorrect:

function add(a, b) {
return a + b;
}

add(2, 3);

Nothing is displayed because
the returned value is ignored.

Correct:

console.log(add(2, 3));

OR

let total = add(2, 3);

console.log(total);

Return vs console.log()

### return

- Sends a value back.
- Ends the function.
- Can be stored in a variable.
- Used when another part of the program
  needs the result.

### console.log()

- Displays information in the console.
- Does not end the function.
- Mainly used for testing and debugging.

Key points to remember

1. return can only be used inside a function.

2. It sends a value back to the caller.

3. Once return executes,
   the function stops immediately.

4. If no value is returned,
   JavaScript returns undefined.

5. return can send back:
   - Numbers
   - Strings
   - Booleans
   - Arrays
   - Objects
   - Functions

6. Use return when you need to use the result later.

7. Use console.log() when you only want
   to display information for debugging.
