/*
Given two values, write a JS program to 
find out which one is nearest to 100. 
*/

const closeToHundered = (a, b) => (100-a) < (100-b) ? a : b;

console.log(closeToHundered(99, 1));
console.log(closeToHundered(88, 12));
console.log(closeToHundered(25, 75));
console.log(closeToHundered(50, 50));