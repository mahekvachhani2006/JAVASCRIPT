//push
let fruits = ['apple', 'banana'];
let newLength = fruits.push('orange');

console.log(fruits);
console.log(newLength);

//pop
let colors = ['red', 'green', 'blue'];
let last = colors.pop();

console.log(last);
console.log(colors);

//unshift
let numbers = [2, 3];
let Length = numbers.unshift(1);

console.log(numbers);
console.log(newLength);

//shift
let queue = ['first', 'second', 'third'];
let removed = queue.shift();

console.log(removed);
console.log(queue);

//lenght
let items = [1, 2, 3, 4, 5];
items.length = 3;
console.log(items);

//concat
let letters = ['a', 'b'];
let result = letters.concat('c', 'd');

console.log(result);

//nested-concat
let arr = [1, 2];
let nested = [3, [4, 5]];

let results = arr.concat(nested);
console.log(results);

//splice
let arrr = [1, 2, 3];
arr.splice(1, 1);

console.log(arrr);
console.log(arrr.length);

//slice
let num = [10, 20, 30, 40, 50];
let sliced = num.slice(1, 3);

console.log(sliced);
console.log(num);

//join
let words = ['Hello', 'world'];
console.log(words.join(' '));

//join
let chars = ['M', 'A', 'H', 'E', 'K'];
console.log(chars.join('')); 