/*
Write a JS program to check a given string contains 
2 to 4 occurrences of a specified character.
*/

const countChar = (str, char) =>
str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
countChar(str, char) >= 2 && countChar(str, char) <= 4;


console.log(contains2To4('ooh', 'o'));
console.log(contains2To4('ooh', 'h'));
console.log(contains2To4('oohoooooo', 'o'));

