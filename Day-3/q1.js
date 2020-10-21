/* Write a JS program to find the number of even digits in a
array of integers. */

const countEvenNumbers = (arr) =>
arr.filter(num => num % 2 === 0).length;
    

console.log(countEvenNumbers([1,2,3,4,5,6]));
console.log(countEvenNumbers([2,2,2,2,2,2,2,2]));
console.log(countEvenNumbers([3,5,7,8,9,5,6,4]));
console.log(countEvenNumbers([1,4,5,8,7,9,6,3,7,]));