/* what is function ?
A function is a reusable block of code that performs a task. 
Functions are defined with the function keyword:
followed by the function name
followed by parentheses ( )
followed by brackets { }
The function name follows the naming rules for variables.
Optional parameters are listed inside parentheses: ( p1, p2, ... )
Code to be executed is listed inside curly brackets: { }
Functions can return an optional value back to the caller.*/



/*Exercise 1 – Simple Function
Task: Create a function that prints:*/

function simpleFunctionPrint(){
    console.log ("Automation Learning Started")
}
simpleFunctionPrint();

/*Exercise 2 – Greeting Function
Task: Create a function that accepts a name and prints */


function greet(name){
    console.log ("HEllO " + name)
}
greet("somanath");

/*Exercise 3 – Addition Function
Task: Create a function that takes two numbers and returns their sum.*/

function add(a, b){
    return(a+b)
}

let result = add(5, 9);
console.log (result)

/*Exercise 4 – Age Validation Function
Task: Create a function checkEligibility(age).

Rules:If age >= 18 → return "Eligible"
  Else → return "Not Eligible"  */

  function checkEligibility(age){
    if (age >= 18){
        return ("Eligible")
    }else{
        return ("Not Eligible")
    }
  }
   // Negative
  console.log(checkEligibility(15))
   // Positive
  console.log(checkEligibility(18))

  /*Exercise 5 – Login Validation Function
Task:
Rules:
If username = "admin" AND password = "1234"
Return "Login Successful"
Else return "Invalid Credentials" */

function validateLogin (userName, password){
    if (userName === "admin1" && password === "123456"){
        return ("Login Successful")
    }else {
        return ("Invalid Credentials")
    }
}
// Positive
console.log (validateLogin ("admin1", "123456"));
// Negative
console.log (validateLogin ("admin1", "1213"));

/*Exercise 6 – Payment Status Function
Task: Create a function checkPayment(status).

Rules:
If status === "SUCCESS" → return "Payment Completed"
Else → return "Payment Failed" */

function checkPayment(status){
    if (status === "SUCCESS"){
        return ("Payment Completed")
    }else {
        return ("Payment Failed")
    }
}
//Negative
console.log (checkPayment("success"))
//Positive
console.log (checkPayment("SUCCESS"))

/*Exercise 7 – Retry Attempt Logic
Task: Create function canRetry(attempts).
Rules:
If attempts < 3 → return "Retry Allowed"
Else → return "Account Locked"*/

function canRetry(attempts){
    if (attempts < 3){
        return("Retry Allowed")
    } else {
        return ("Account Locked")
    }
}

//Negative
console.log (canRetry (4))
// Positive
console.log (canRetry (2))

/*Exercise 8 – Discount Calculator
Task: Create function calculateDiscount(amount).
Rules:
If amount >= 2000 → return 10% discount
Else → return 5% discount */


function calculateDiscount (amount){
    if(amount >= 2000){
        return (amount/100 * 10)
    } else {
        return (amount/100 * 5)
    }
}

//Negative
console.log (calculateDiscount( 1500))

//Possitive
console.log (calculateDiscount( 2000))

/*Exercise 9 – Multiple Conditions Function
Task: Create function canBookAppointment(age, isMember)

Rules:
Age >= 18
AND isMember === true
Return "Booking Allowed"
Else return "Booking Not Allowed" */

function canBookAppointment (age, isMember){
    if (age >= 18 && isMember === true){
        return ("Booking allowed")
    }else {
        return ("Booking Not Allowed")
    }
}
//Positive 
console.log (canBookAppointment (18, true))

//Negative
console.log (canBookAppointment (15, true))


/*Exercise 10 – Profile Completion Check
Task: Create function isProfileComplete(name, email, phone)

Rules:
If all fields not empty → return "Profile Complete"
Else → return "Incomplete Profile" */

function isProfileComplete (name, email, phone){
    if (name !== "" && email !== "" && phone !== ""){
        return ("Profile completed")
    }else {
        return ("Incomplete profile")
    }
}

// Possitive
console.log (isProfileComplete("test", "test@gmail.com" , "1234567890"))

//Negative
console.log (isProfileComplete("test", "test@gmail.com", "" ))

/* Exercise 11: Verify the user is valid or invalid
Email empty → return "Email Required"
Password empty → return "Password Required"
Password < 8 → return "Password Too Short"
Valid everything → return "Valid User"
This is how real production systems behave.*/

function validateUser(email, password){
    if (email.trim()=== ""){
        return ("Email Required")
    } else if (password.trim() === ""){
        return ("Password Required")
    } else if (password.length < 8){
        return ("Password Too Short")
    }else if (!email.includes("@") || !email.includes (".")){
        return ("Invalid email format")
    } else {
        return ("Valid user")
    }
}

// positive 
console.log (validateUser ("test@gmail.com", "123456789"))

// Negative 
console.log (validateUser ("test@gmailcom", "123456789"))
console.log (validateUser ("testgmail.com", "123456789"))
console.log (validateUser ("", "123456789"))
console.log (validateUser ("test@gmail.com", " "))
console.log (validateUser ("test@gmail.com", "123"))
console.log (validateUser ("", "123"))


/* Exercise 12 : Valdiate profile
If name is empty → return "Name Required"
If age < 18 → return "Underage"
If country is empty → return "Country Required"
If everything valid → return "Profile Valid" */

function validateProfile(name, age, country){
    if (name.trim() === ""){
        return ("Name Required")
    } else if (!age >= 18){
        return ("Underage")
    } else if (country.trim() === ""){
        return ("Country Required")
    } else {
        return ("Profile Valid")
    }
}

// Positive 
console.log (validateProfile("test", 18, "india"))

//Negative
console.log (validateProfile("", 18, "india"))
console.log (validateProfile("test", 15, "india"))
console.log (validateProfile("test", 18, ""))




