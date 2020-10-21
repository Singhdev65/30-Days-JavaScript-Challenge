/* Write a JS program to get the largest even number
     from an array of integers */

const largestEven = (arr) => 
Math.max(...arr.filter(num =>
    num % 2 === 0));

console.log(largestEven([1,2,5,6,7,80,9]));
console.log(largestEven([1,2,7,60,7,8,9]));
console.log(largestEven([9,8,7,6,54,4,3]));