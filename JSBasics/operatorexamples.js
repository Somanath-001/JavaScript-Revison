


// Addition (+)
  o = 7
  y = 9
  z = o+y
 console.log(z)

 //Substraction (-)

  a = 15;
  b = 60;
  c = (b-a)+(a+b);

 console.log(a, b, c)

 //Multiplication (*)

  d = 5
  e = 9
 
 console.log(d*e)

 //Exponentiation

  f = 9
  g = 2

  h = f**g
  console.log(h)

  //Division (/)

  i = 15
  j = 25
   k =(i/j)
   console.log(k)

   // Modulus (division reminder) (%)

   l = (i%j)
   console.log(l)

   // increment (++)

   m = ++l + l++
   console.log (m)
   console.log(l)
   m = l++
   console.log(m)
   console.log(l)

   //Decrement (--)

   //comparision operators
// Operator	   Description
// ==	       equal to
// ===	       equal value and equal type
// !=	       not equal
// !==	       not equal value or not equal type
// >	       greater than
// <	       less than
// >=	       greater than or equal to
// <=	       less than or equal to
// ?	       ternary operator

let value1 = 8;
let value2 = 15;

if(value1 == value2){
    console.log("value1 == value2  -line71")  // do not print
}else if(value1 != value2){
    console.log("value1 != value2   -line73")  // will print
    value1 = 9 - value2;
}if(value1 > value2){
    console.log("value1 > value2  -- line76") // do not print
} else if(value1 < value2){
    console.log("value1 < value2   -- line78") // will print
    value1 = 28 - value2
}if(value1 <= value2 ){
    console.log ("value1 <= value2  ---line81")  // will print
}else if(value1 >= value2){
    console.log("value1 >= value2    -- line83")
}else {
    console.log("Whatever  --86")
}


/*

Exercise 1
calculate tip based on the logic given below
if bill amount is between 50 and 300rs, then 15% of the bill amount 
other wise it is 20% of bill amount

log the output in the following format, using template
The bill was 275rs, the tip was 45RS and the total value is 320RS
*/

let billAmount = 275;
// applying conditional operators
let tip = (billAmount >50 || billAmount <300)? (15/100) *billAmount : (20/100) * billAmount

console.log(`the bill was ${billAmount}rs, the tip was ${tip}rs and the total value is ${billAmount + tip}rs`)

console.log(Boolean("18" === 18))
console.log(Boolean("18" == 18))