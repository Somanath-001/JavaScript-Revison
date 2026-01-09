//conditions

// if statement
let age = 19;
 if (age >= 18){
     console.log("You are eligible to vote.");
 }
// if-else statement

 let licence = false;
 
 if(age>=18 && licence==true){
    console.log("you can drive a car")
 }else{
    console.log("you cannot drive a car")
 }
// if-else if-else statement

let marks = 85;
let grade

if(marks >= 95 || marks <= 85){
    console.log("User got grade A")
}else if (marks >=75 || marks <=84){
    console.log("user got grade B")
} else if(marks >=60 || marks <= 74){
    console.log ("you got grade C")
}else{
    console.log ("You ffailed the exam");
}


/* Scenario 1: Login Status Check
//Context:
User enters username and password
System validates credentials*/

let userName = "Royal@0018"
let password = "8882221123"


if(userName =="Royal@0018" && password == "8882221122"){
    console.log("Credentials are valid, you are logged in successfully" +" " + userName)
}else if (userName == "Royal@0018" && password !== "8882221122"){
    console.log ("Invalid password please check and try again");
}else if(userName !== "Royal@0018" && password == "8882221122"){
    console.log("Invalid user name please check and try agin")
}else{
    console.log ("Both username and password are invalid, please check and try again");
}

/*Scenario 2: Age Eligibility for Registration
Context: User enters age
Conditions:
If age is 18 or above → Allow registration
Else → Show “Not eligible” */

let userAge = 15;

if (userAge >= 18){
    console.log ("your successfully registered")
}else{
    console.log("you should be at least 18 years old to get registered")
}
/*Scenario 3: Subscription Access
Context: User has a subscription status 
Conditions:
If subscription is active → Allow premium content
Else → Ask user to subscribe*/

let subscriptionStatus = false;

if (subscriptionStatus){
    console.log ("user should have access to premium content")
}else{
    console.log("please subscribe to access premium content")
}
/*Scenario 4: Discount Based on Purchase Amount
Context: User purchases items worth a certain amount
Conditions:
If amount ≥ 5000 → 20% discount
Else if amount ≥ 3000 → 10% discount
Else → No discount */

let purchaseAmount = 4500;

if (purchaseAmount >= 5000){
    console.log("user gets 20% of discount on total purchase amount")
} else if(purchaseAmount >=3000){
    console.log("user gets 10% of discount on total purchase amount")
}else{
    console.log("user does not get any discount on total purchase ammount")
}

/*Scenario 5: Pass / Fail Result
Context: Student exam marks
Conditions:
If marks ≥ 40 → Pass
Else → Fail*/

let studentMarks = 50;
if (studentMarks >40){
    console.log ("student has passed the exam")
} else{
    console.log("student has failed the exam")
}

/*Scenario 6: Feature Visibility Based on User Role
Context: User role can be Admin, Member, or Guest
Conditions:
If role is Admin → Show all features
Else if role is Member → Show limited features
Else → Show basic view*/

let userRole = "admin"

if(userRole === "admin"){
    console.log ("show all the features to the user")
} else if (userRole === "Member"){
    console.log("Show the limited features to the user")
}else{
    console.log("show the basic feature to the user")
}


/*Scenario 7: App Maintenance Mode
Context: App maintenance flag is ON or OFF
Conditions:
If maintenance is ON → Show maintenance message
Else → Load application normally*/


let appMaintenance = true;
if (appMaintenance === true){
    console.log("the application is under maintenance")
}else{
    console.log("load the application normally")
}


/* Scenario 8: Free Sessions Availability
Context: User has remaining free sessions count
Conditions:
If count > 0 → Allow booking
Else → Ask user to purchase plan*/

let sessions = 1;

if (sessions> 0){
    console.log("The user can book the free session. This session at no cost to you")
} else{
    console.log("please purchase the plan to book the sessions")
}


/* Scenario 9: API Response Status
Context: API returns a status code
Conditions:
If status is 200 → Success
Else → Failure*/

let apiStatus = 404;

if (apiStatus == 200) {
    console.log("The api request as successful")
}else{
    console.log( "The api request has failed")
 }

/*Scenario 10: Input Validation
Context: User submits a form field
Conditions:
If input is empty → Show validation error
Else → Accept input*/

let username = "test" 
if (username === "") {
    console.log (" validation error: username field cannot be empty") 
} else{ 
    console.log ("username accepted: " + username) 
}

