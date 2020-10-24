/* Write a JS function that accepts a 
string as a parameter and count
the number of vowels within the string. */

const countLetters = (str, letters = 
    ['a', 'e', 'i', 'o', 'u']) => 
    str.split('').filter(s =>
    letters.indexOf(s) > -1).length;

console.log(countLetters('abcde'));
console.log(countLetters('abcde', ['b','c']));
console.log(countLetters('aeiou'));