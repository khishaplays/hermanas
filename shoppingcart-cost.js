/*LAB PRACTICE CANVAS
imagine you're a junior developer working on a web application for an e-commerce company. 
Your task is to calculate the total price of a customer's order, including taxes and shipping fees. 
To accomplish this, you need to understand how to use expressions and variable assignments in JavaScript.
*/

// Step 1: Define the variables for the order
const booksPrice = 50;//used const to define a variable that cannot be reassigned.
const booksQuantity = 100;//quantity of books purchased
const tshirtsPrice = 75;//price of a single t-shirt
const tshirtQuantity = 50;//quantity of t-shirts purchased


const shippingFee = 5;//Fixed shipping fee
const taxRate = 0.08;//tax rate of 8%

/*CALCULATE THE TOTAL PRICE OF THE ORDER
To calculate the total price of the order, we need to follow these steps:
1. Calculate the total cost of books by multiplying the price of a single book by the quantity purchased.
2. Calculate the total cost of t-shirts by multiplying the price of a single t-shirt by the quantity purchased.
3. Add the total cost of books and t-shirts to get the subtotal.
4. Calculate the tax amount by multiplying the subtotal by the tax rate.
5. Add the shipping fee to the subtotal and tax amount to get the final total price of the order.
*/

//  Calculate the total cost of books before shipping fee and tax.
const totalBooksCost = booksPrice * booksQuantity;

//Calculate the total cost of t-shirts before shipping fee and tax.
const totalTshirtsCost = tshirtsPrice * tshirtQuantity;

// Calculate the subtotal by adding the total cost of books and t-shirts.
const subtotal = totalBooksCost + totalTshirtsCost;

//  Calculate the tax amount by multiplying the subtotal by the tax rate.
const taxAmount = subtotal * taxRate;

//  Calculate the final total price of the order by adding the shipping fee and tax amount to the subtotal.
const finalTotalPrice = subtotal + taxAmount + shippingFee;

//display the total cost
//this is displayed using console.log() method to display the final total price of the order in the console.
console.log(`The final total price of the order is: $${finalTotalPrice}`);

