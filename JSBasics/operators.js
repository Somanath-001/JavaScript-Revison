/*Part 1: Arithmetic Operators Practice (+ - * / % ++ --)
Scenario 1: Cart Total Calculation

Given item price = 499
Quantity = 3
Calculate total price
Add 18% GST
Verify final amount*/

let ballPrice = 499;
let quantity = 4;
let gst = 18;
let totalPrice = ballPrice * quantity;
let finalPrice = totalPrice + (totalPrice * gst / 100)
console.log(`Total price for ${quantity} balls is ${totalPrice}. After adding ${gst}% GST, the final ammount is ${finalPrice}.`);

/*
Scenario 2: Discount Application
Original price = 2000
Discount = 15%
Calculate discount amount
Calculate final payable amount*/

let originalPrice = 2000;
let discount = 15;

let discountAmount = originalPrice/100 * discount;

let finalPayableAmount = originalPrice - discountAmount;
console.log(`Original price: ${originalPrice}. Discount amount : ${discountAmount}. the final payable amount is ${finalPayableAmount}.`)

/* Scenario 3: Even or Odd Checker (Using % Operator)
Given number = 27
Check whether number is even or odd using modulus % */

let firstNumber = 27;

if (firstNumber% 2 ===0 ){
    console.log(`Number is Even`)
} else {
    console.log(`Number is Odd`)
}

/* Scenario 4: Increment / Decrement
Cart items = 5
User adds 1 item → increment
User removes 2 items → decrement
Print final cart count */

let cartItems = 5;

// User adds 1 item → increment
cartItems++;
//User removes 2 items → decrement
cartItems -= 2;

console.log(`The final cart count: ${cartItems}.`)

/* Part 2: Comparison Operators Practice (> < >= <= == === != !==)
Scenario 5: Age Eligibility
Age = 17
Check if user is eligible to vote (>= 18) */

let userAge = 17;

if (userAge >= 18){
    console.log("user is eligible to vote")
} else {
    console.log("User is not eligible to vote")
};

/*Scenario 6: Login Validation (Important for Testing)
Stored password = 12345
Entered password = "12345"*/

let storedPassword = 12345;
let enterPassword = "12345"
if (storedPassword == enterPassword){
    console.log ("User login successfull")
}else {
    console.log("Please enter valid password")
}

if (storedPassword === enterPassword){
    console.log("user login successfully")
}else {
    console.log ("Please enter valid password")
}

/*Scenario 7: Salary Check
Salary = 25000
Minimum required salary = 30000
Check if eligible for loan */

let salary = 25000;
let minimumRequiredSalary = 30000;

if (salary >= minimumRequiredSalary){
    console.log("User is eligible for loan")
}else {
    console.log("User is not eligible for loan")
}

/*Scenario 8: API Status Validation (Testing Related)
Status code = 201
Check if status is success (200–299) */

let statusCode = 200;

if (statusCode >= 200 && statusCode <= 299){
    console.log("Test is passed")
} else{
    console.log("Test is failed")
};

/*Part 3: Logical Operators Practice (&& || !)
Scenario 9: Login Access
User can login only if:
Username is correct AND
Password is correct  */

let userName = "somanath"; 
let password1 = "1234567";

if (userName === "somanath" && password1 === "1234567"){
    console.log("Username is correct and Password is correct")
} else {
    console.log("Username or password is incorrect")
};



/* Scenario 10: Weekend Offer
Offer applicable if:
Day is Saturday OR Sunday
Use ||  */ 

let day = "monday";

if (day === "Saturday" || day === "Sunday"){
    console.log("Offer is applicable")
} else{
    console.log("Offer is not applicable")
}

/* Scenario 11: Account Not Blocked
isBlocked = false
Use ! operator to allow login */

let isBlocked = false;

if (!isBlocked === true){
    console.log ("Account is Not blocked")
} else {
    console.log ( "Account is blocked")
}

/* Scenario 12: Complex Condition (Very Important for QA)

User can book appointment if:
Age >= 18
AND hasValidID = true
AND paymentDone = true */

let age1 = 25;
let userValidId = false;
let userPaymentDone = true;

if (age1 >=18 && userValidId && userPaymentDone){
    console.log ("User can book an appiontment with doctor")
} else {
    console.log ("user can't book an appointment with doctor due to not reach the requirments")
}

/*Part 4: Assignment Operators Practice (+= -= *= /=)
Scenario 13: Wallet Balance

Balance = 5000
Add salary = 20000
Deduct rent = 8000
Deduct groceries = 3000
Print final balance */


let balance = 5000;
let salary1 = 20000;
let roomRent = 8000;
let groceries = 3000;

balance += salary1;
balance -= roomRent;
balance -= groceries;

console.log ("The final balance amount:" + balance)

/*Scenario 14: Points Multiplier

Initial points = 100

Double the points using *= */

let initialPoints = 100;
initialPoints *= 2;

console.log ("Total Points:" + initialPoints)

/*Scenario 15: Mini E-Commerce Validation

Item price = 1000
Quantity = 2
Discount = 10%
GST = 18%
User eligible for extra 5% discount if total > 1500
Requirements:
Calculate final payable amount
Check if amount > 2000 → Print "High Value Order"
Use arithmetic + comparison + logical operators */

/*How You Should Practice
Instead of just writing code:
First write expected output
Then write calculation
Then use console.log to verify
Then convert into if condition */

let itemPrice = 1000;
let quantity1 = 2;
let discount1 = 0.10;
let GST1 = 0.18;
let discount2 = 0.05;

let subtotal = itemPrice * quantity1

afterdiscount1 = subtotal - (subtotal*discount1)

afterGST1 = afterdiscount1 + (afterdiscount1 * GST1)

let finalAmount;

if(afterdiscount1 > 1500){
    finalAmount = afterGST1 - (afterGST1 * discount2)
}else{
    finalAmount = afterGST1
}
console.log("Final Payable Amount:", finalAmount);

if (finalAmount > 2000) {
    console.log("High Value Order");
}