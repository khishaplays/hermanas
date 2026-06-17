# Understanding JavaScript Variables

## 1. What Are JavaScript Variables?

A variable is a way of storing data so that a program can use it later. It allows us to save, access, and update information.

Real-life example: A variable is like a labeled box where you keep something you need. The label helps you find the information later.

Example:

let name = "Khisha";

## 2. How Do You Declare Variables in JavaScript?

JavaScript uses let, const, and var to declare variables.

### let

Used when the value can be changed.

let age = 20;
age = 21;

### const

Used when the value cannot be reassigned.

const country = "Kenya";

### var

An older way of declaring variables.

var city = "Nairobi";

## 3. Rules for Naming Variables

Rules for naming variables:

- Variable names can contain letters, numbers, _ and $
- They cannot start with a number
- Spaces are not allowed
- JavaScript keywords cannot be used as variable names
- Variable names are case-sensitive

Valid variable names:

let firstName = "Khisha";
let age2 = 20;
let _score = 100;

Invalid variable names:

let 2age = 20;
let first name = "Khisha";
let let = 5;

## 4. Variable Naming Styles

### Camel Case

Starts with a lowercase letter and each new word starts with a capital letter.

Examples:

firstName  
totalMarks

Commonly used for JavaScript variables.

### Pascal Case

Each word starts with a capital letter.

Examples:

StudentName  
UserProfile

Commonly used for classes.

### Snake Case

Words are separated using underscores.

Examples:

first_name  
total_marks

Commonly used in some programming languages.

## 5. Summary

JavaScript variables store information that programs can use. Learning how to create and name variables properly makes code easier to understand and maintain.