//condition-statment
let num = 10;

if (num > 0) {
    console.log("Positive");
} else if (num === 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}

//ternary
let num1 = 10;
let result = (num1 > 0) ? "Positive" : (num1 === 0) ? "Zero" : "Negative";
console.log(result);

//object
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    startEngine: function () {
        console.log("Engine started!");
    }
};

console.log(car.brand);
car.startEngine(); 