 // ARRAYS

 //Exercise - 1
 //Print all users one by one.

 let users = ["admin", "qa", "tester", "manager"]

 users.forEach(users =>{
    console.log(users)
 })

 /*Exercise - 2
 Print:
First browser
Last browser */

let browsers = ["Chrome", "Firefox", "Edge", "Safari"]

console.log("First Browser: ", browsers[0])
console.log("Last Browser: ", browsers[browsers.length -1])

/* Exercise - 3
Add New user*/

let users1 = ["admin", "qa"]

users1.push("testers")
console.log (users1)

/*Exercise - 4
Remove the last environment.*/

let environments = ["dev", "qa", "staging", "production"]
 environments.pop()

 console.log (environments)

 /*Exercise - 5

 Print total number of test cases.
 */

 let testCases = ["loginTest", "signupTest", "logoutTest", "profileTest"]

 console.log (testCases.length)

 /*Exercise - 6
 Check If User Exists
 */

 let users2 = ["admin", "qa", "testers"]

 if (users2.includes("qa")){
    console.log("User Exists")
 } else {
    console.log ("User Not Exists")
 }

 console.log(users2.includes("qa") ? "User Exists" : "User Not Exist")
 /*Exercise - 7
 Print Only Failed Tests */
 let testResults = ["Passed", "Failed", "Passed", "Failed", "Passed"]


    testResults.forEach(result=>{
        if(result === "Failed"){
            console.log(result)
        }
     
    });

 /*Exercise - 8
 Print usernames in uppercase.
 */

 let users3 = ["admin", "qa", "testers"]

 users3.forEach(user =>{
    console.log(user.toUpperCase())
 });


 /*Exercise - 9
 Find Total Failed Tests
  */
 let testResults1 = ["Passed", "Failed", "Failed", "Passed", "Passed"]

 let failedCount = 0;
 
 testResults.forEach(result=>{
    if(result === "Failed"){
        failedCount++
    }
 });
 console.log("Total Failed Tests: "+ failedCount);


 /*Exercise - 10
 Loop Through Test Data (Automation Style */

 let loginUsers = ["Admin", "QA", "Testers"]

 loginUsers.forEach(user =>{
    console.log("Testing login with " + user)
 });

 /*Exercise - 11
 Convert All Browsers to Uppercase */

 let browsers1 = ["chrome", "Firefox", "Edge"]

 upperBrowser = browsers1.map(browser => browser.toUpperCase());

 console.log (upperBrowser);

 /*Exercise - 12
 Add Prefix to Test Names */

 let tests = ["login", "signup", "logout"]

 testNames = tests.map(test=> "TC_" + test);
 console.log (testNames);

 /*Exercise - 13
 Get Only Failed Tests */

 let results = ["Passed","Failed","Passed","Failed"]

 failedTests = results.filter(result => result === "Failed");
 console.log (failedTests);

 /*Exercise - 14
 Get Only Admin Users */

 let users4 = ["admin","qa","tester","admin"]

 adminUser = users4.filter(user => user === "admin");

 console.log (adminUser);

 /*Exercise - 15
 Find First Failed Test */

 let results2 = ["Passed","Passed","Failed","Failed"]

 firstFailedTest = results2.find(result => result === "Failed");
 console.log (firstFailedTest);

 /*Exercise - 16
 Find Browser Edge */

 let browsers3 = ["chrome", "firefox", "edge"]
 findBrowser = browsers3.find(browser => browser === "edge");
 console.log (findBrowser);

 /*Exercise - 17
 Convert Prices to Discount Prices */

 let prices = [100,200,300]

 let discount = 0.10;

 let afterDiscount = prices. map(price => price - price * discount );
 console.log (afterDiscount);

 /*Exercise - 18
 Filter Even Numbers */

 let numbers = [1,2,3,4,5,6]

 findEvenNum = numbers.filter(number => number%2 === 0);
 console.log (findEvenNum);

 /* Exercise - 19
 Find First Number Greater Than 50
 */
let scores = [10,25,60,80]

findScore = scores.find(score => score > 50);
console.log (findScore);

/*Exercise - 20

 */

let loginUsers1 = ["admin","qa","tester"]

testUsers = loginUsers1.map(user => "Testing login with" + user);
console.log (testUsers);