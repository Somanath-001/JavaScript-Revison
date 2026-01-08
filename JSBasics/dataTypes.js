// JavaScript data types that are frequently used by testers
/* What are Data Types?
Ans. Data types define what kind of value a variable can store in JavaScript. 
common javascript data types:
1. String
2. Number 
3. Boolean 
4. Undefined
5. Null
*/


 /* String Data Type: Used to store textual data
A string is a sequence of characters used to represent text. 
Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
Examples of strings include names, addresses, and any other textual data.
*/
 

let  firstName = "Somanath";
let lastName  = "Ammineni";
let fullName = firstName +" "+ lastName
console.log(fullName); // Output: Somanath Ammineni

let role = "Test Craft Person";
console.log(role); // Output: Test Craft Person

let company = "Incubyte Consulting LLP";
console.log(company); // Output: Incubyte Consulting LLP

console.log(`My name is ${fullName} and I work as a ${role} at ${company}.`)

/* Number Data Type: Used to store numeric values
A number can be an integer (whole number) or a floating-point number (decimal).
Examples of numbers include age, price, and quantity.
*/

let age = 28;  //integer number
console.log(typeof age +": " +age); // Output: 28

let price = 19.99; //floating-point number (decimal number)

console.log(typeof price +": " +price); // Output: 19.99

let phoneNumber = 8882221111 // large integer number
console.log(typeof phoneNumber +": " +phoneNumber); // Output: 8882221111