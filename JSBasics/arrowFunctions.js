/*Arrow Functions allow a shorter syntax for function expressions.
You can skip the function keyword, the return keyword, and the curly brackets
An arrow function uses the => symbol.
An arrow function is always written as a function expression.*/

/*Exercise 1

Convert this normal function to arrow function.*/

let multiply = (a,b) =>(a*b)

console.log(multiply(4, 4))

//Exercise 2
//Create an arrow function to add two numbers.

const add = (c,d) =>{
    return (c+d)
}
console.log(add(5, 8))

//Exercise 3
// Create an arrow function that prints a greeting message.
//Input: "Somanath"
//Output: Hello Somanath

const greet = (name) => {
    return("Hello " + name)
}
console.log(greet("somanath"))

//Exercise 4
// Create an arrow function to check if a number is positive or negative.

const checkNum = (num) => (num < 0) ? "Negative" : "Possitive"


console.log(checkNum(-5))
console.log(checkNum(5))

//Exercise 5
/*Create an arrow function to check password validity.

Rule:
If password length >= 8 → "Valid Password"
Otherwise → "Invalid Password" */

const validatePassword = (password) => {
    if (password.length >= 8){
        return ("valid Password")
    }else {
        return ("Invalid Password")
    }
}
console.log (validatePassword("test"))
console.log (validatePassword("test1234"))

//Exercise 6
//Create an arrow function to calculate 10% discount.

const calculateDiscount = (value) =>{ return (value - (value/100 *10))
}

console.log (calculateDiscount(1000))
console.log (calculateDiscount(500))

//Exercise 7
/* Create an arrow function.

Rules:
If score >= 50 → "Test Passed"
Otherwise → "Test Failed" */

let testResult = (score) =>{
    if (score >= 50){
        return ("Test Passed")
    }else {
        return ("Test Failed")
    }
}
console.log (testResult(50))
console.log (testResult(25))

//Exercise 8
//Create an arrow function to check whether a URL contains "https".

let validateUrl = (inputUrl) =>{
    if(inputUrl.startsWith("https")){
        return ("Secure Url")
    }else{
        return ("Not Secure Url")
    }
}

console.log(validateUrl("https:www.google.com"))
console.log(validateUrl("http:www.google.com"))

//Short version
let validateUrl1 = (inputUrl1) => (inputUrl1.startsWith("https")) ? "Secure Url" : "Not Secure"

console.log(validateUrl1("http:www.google.com"))
console.log(validateUrl1("https:www.google.com"))

/*Exercise 9
Create an arrow function to return the largest number among three numbers.*/

let largestNumber = (x,y,z) => Math.max(x, y, z) 
console.log(largestNumber(10,55,60))
/* Exercise 9
Create an arrow function to validate a username.
Rules:
Username length >= 5 → "Valid Username"
Otherwise → "Invalid Username" */

let validateUserName = (userName) => {
    if (userName.length >= 5){
        return ("Valid Username")
    } else {
        return ("Invalid Username")
    }
}

console.log (validateUserName ("test"))
console.log (validateUserName ("Royal"))

//Short version
let validateUserName1 = (userName1) => (userName1.length >= 5) ? "Valid Username" : "Invalid Username"


console.log (validateUserName1 ("test"))
console.log (validateUserName1 ("Royal"))

/*Exercise 10

Email Validator (Simple)
Create an arrow function to check whether an email contains "@" and "." */

let validateEmail = (inputEmail) =>{
    if (inputEmail.includes("@") && inputEmail.includes(".")){
        return ("Valid Email")
    }else {
        return ("Invalid Email")
    }
}

console.log (validateEmail ("test@gmail.com"))
console.log (validateEmail ("testgmail.com"))
console.log (validateEmail ("test@gmailcom"))

//Short version
let validateEmail1 = (inputEmail1) => (inputEmail1.includes("@") && inputEmail1.includes(".")) ? "Valid Email" : "Invalid Email"

console.log (validateEmail1 ("test@gmail.com"))
console.log (validateEmail1 ("testgmail.com"))
console.log (validateEmail1 ("test@gmailcom"))


/* Exercise 11

Test Case Status Counter
Create an arrow function. */

let verifyTestCount = (PassedTests, FailedTests) => {
    return (
        
        PassedTests + FailedTests)
}

console.log (verifyTestCount(55, 10))

//Short Version
let verifyTestCount1 = (PassedTests1, FailedTests1) => ( PassedTests1 + FailedTests1)

console.log (verifyTestCount(65, 10))

/* Exercise 12
Login Attempt Checker
Create an arrow function to check login attempts.
Rules:
attempts <= 3 → "Login Allowed"
attempts > 3 → "Account Locked" */

let checkLoginAttempts = (attempts) => {
    if (attempts <= 3){
        return ("Login Allowed")
    } else{ 
        return ("Account Locked")
    }
}

console.log (checkLoginAttempts(5))
console.log (checkLoginAttempts(3))

//Short Version
let checkLoginAttempts1 = (attempts1)=> (attempts1 <= 3)? "Login Allowed" :"Account Locked"

console.log (checkLoginAttempts1(5))
console.log (checkLoginAttempts1(3))

/* Exercise 13
Create an arrow function to add 18% tax to a product price.*/

let addTaxPercentage = (taxAmount) => {
    return (taxAmount + taxAmount/100 * 18)
}
console.log(addTaxPercentage(1000))

//Short Version

let addTaxPercentage1 = (taxAmount1)=> (taxAmount1 + taxAmount1 * 0.18)
console.log(addTaxPercentage(1000))

/*API Status Checker (Very QA Relevant)

Create an arrow function.*/

let apiStatusCheck = (statusCode) => {
    if (statusCode === 200){
        return ("Success")
    }else if (statusCode === 400){
        return ("Bad Request")
    }else if(statusCode === 500)
        return ("Server Error")
    
}
console.log (apiStatusCheck(200))
console.log (apiStatusCheck(400))
console.log (apiStatusCheck(500))

//Short version

let apiStatusCheck1 = (statusCode1) => 
    (statusCode1 === 200)? "Success" 
    : (statusCode1 === 400) ? "Bad Request" 
    : (statusCode1 === 500) ? "Server Error" 
    : "Unknown Error";

console.log (apiStatusCheck1(200))
console.log (apiStatusCheck1(400))
console.log (apiStatusCheck1(500))

/*password Strength Checker

Rules:
Password is Strong if:
length ≥ 8
contains number*/

let passwordStrength = (password) =>{
    if (password.length >= 8 && /[0-9]/.test(password)){
        return ("Strong Password")
    }else {
        return ("Weak Password")
}
}

console.log(passwordStrength("Test"))
console.log(passwordStrength("abcdefghijk"))
console.log(passwordStrength("Test1234"))

//Short Version

let passwordStrength1 = (password1) => (password1.length >= 8 && /[0-9]/.test(password1)) ? "Strong Password" : "Weak Password";

console.log(passwordStrength1("Test"))
console.log(passwordStrength1("abcdefghijst"))
console.log(passwordStrength1("Test1234"))
