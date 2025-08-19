//array map
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log('Doubled:', doubled);

//array filter 
const number = [1, 2, 3, 4, 5, 6];

const evens = number.filter(function (num) {
  return num % 2 === 0;
});

console.log('Evens:', evens);