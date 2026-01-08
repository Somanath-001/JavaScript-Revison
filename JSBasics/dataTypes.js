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

/* Boolean Data Type: Used to store true or false values
A boolean represents one of two values: true or false.
Booleans are often used in conditional statements and logical operations.
*/
let employerIsIncubyte = true;
console.log(typeof employerIsIncubyte +": " +employerIsIncubyte); // Output: true
 
let workFromOffice = false;
console.log(typeof workFromOffice +": " +workFromOffice); // Output: false

/* Undefined Data Type: Represents a variable that has been declared but not assigned a value
When a variable is declared but not initialized, it has the value undefined.
This indicates that the variable exists but does not yet hold any meaningful data.
*/

let middleName;
console.log(typeof middleName +": " +middleName); // Output: undefined

let car;
console.log(typeof car +": " +car); // Output: undefined

/* Null Data Type: Represents the intentional absence of any object value
Null is a special value that indicates that a variable has been explicitly set to have no value.
It is often used to signify that a variable should not point to any object or data.
*/

let address = null;
console.log(typeof address +": " +address); // Output: null     

let previousEmployer = null;
console.log(typeof previousEmployer +": " +previousEmployer); // Output: null

/* NON-PRIMITIVE Data Type: Objects
Objects are complex data types that can store collections of data and more complex entities.
An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be any data type, including other objects.
Objects are used to represent real-world entities and their properties.
*/

let user ={
    name: "Somanath Ammineni",
    age: 28,
    role: "Test Craft Person",
    employer: "Incubyte Consulting LLP"
}
console.log(user)
console.log(typeof user + ": "+ user); // Output: [object Object]

console.log(typeof user + ": "+ JSON.stringify(user));
