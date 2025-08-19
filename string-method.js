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

//string slice
let str = "Hello, world!";
let sliced = str.slice(0, 5);
console.log(sliced);

//substring
let sub = "Hello, World";
let substring = str.substring(0, 5);
console.log(substring)

// string-method.js
let text1 = "HELLO WORLD";
let letter = text1.charAt(0);
console.log(letter);

//String charCodeAt
let text2 = "HELLO WORLD";
let code = text.charCodeAt(5);
console.log(code);

// padStart
let text3 = "5";
text = text.padStart(4, "0");
console.log(text);

/// padend
let text4 = "5";
text = text.padEnd(4, "0");
console.log(text);

//repeat
let text5 = "Hello world!";
let result = text.repeat(2);
console.log(result);

//replace
let text6 = "Hello world";
let result1 = text.replace("world", "JavaScript");
console.log(result1);

//replace all
let text7 = "apple banana apple";
let result2 = text.replaceAll("apple", "orange");
console.log(result2);

//split
let text8 = "JavaScript is fun";
let words = text.split(" ");
console.log(words);
