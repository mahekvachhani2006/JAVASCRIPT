//arithmetic-operator
let sum = 10;
let sum1 = 20;
let sum2 = sum + sum1;
console.log(sum2);

//Multiplication
let x = 10;
let y = 20;
let z = x * y;
console.log(z);

//Subtracting
let a = 10;
let b = 20;
let c = a - b;
console.log(c);

//Dividing
let d = 10;
let e = 20;
let f = d / e;
console.log(f);

//Remainder (%)
let g = 10;
let h = 20;
let i = g % h;
console.log(i);

//Incrementing
let j = 10;
j++;
let k = j;
console.log(k);

//Decrementing
let l = 10;
j--;
let m = j;
console.log(m);

//logical operator
//AND &&
let isstudent = true;
let isnotstudent = false;

if (isstudent && isnotstudent) {
    console.log("PRESENT.");
} else {
    console.log("NOT A PRESENT.");
}

//OR ||
let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
    console.log("You have access.");
} else {
    console.log("Access denied.");
}

//NOT !
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
} else {
    console.log("Welcome back!");
}

//String toUpperCase
let name = "hello world";
let upperName = name.toUpperCase();
console.log(upperName);

//String toLowerCase
let greeting = "HELLO WORLD";
let lowerword = greeting.toLowerCase();
console.log(lowerword);

//String trimStart
let text = "   Hello mem!   ";
let trimmed = text.trimStart();
console.log(trimmed);

//trimEnd
let world = "   Hello mem!   ";
let message = text.trimEnd();
console.log(message); 
