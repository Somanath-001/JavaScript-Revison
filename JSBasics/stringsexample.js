const now = 2025;
const independence = 1947;
const country = "India"

// India is into 78th years of independence
const statement = country + " is into "+ (now - independence)+"th years of independence.";
//does concatenation
console.log(statement)

//Template string

const statementWithTemplate = `${country} is into ${now - independence}th years of independence`;

console.log(statementWithTemplate)