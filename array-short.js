//reverse
let arr = ["m,a,h,e,k"];
arr.reverse();
console.log(arr);

//descending order
let arr1 = [3, 1, 4, 5, 2];
arr.sort((a, b) => b - a);
console.log(arr1);

//numeric short
let arr2 = [10, 2, 33, 4];
arr.sort((a, b) => a - b);
console.log(arr2);

//min/max
let arr3 = [10, 2, 57, 4];
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(min, max);