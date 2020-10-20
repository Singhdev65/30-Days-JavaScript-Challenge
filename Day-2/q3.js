/*
Write a JS program to concatenate two strings 
except their first character.
*/

const stringConcatenate = (str1, str2) => 

str1.slice(1) + str2.slice(1);


console.log(stringConcatenate('abc', 'def'));
console.log(stringConcatenate('Prince', "Anjali"));
console.log(stringConcatenate('Prince', 'puja'));
console.log(stringConcatenate('prince', 'Ranju'));