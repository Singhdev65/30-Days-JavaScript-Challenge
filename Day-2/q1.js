/* Write a Js program to create a new string 
from a given string taking the first three characters
and the last three characters of a string and adding 
them togather. The string length must be 3 or more, 
if not, the original string is returned. 
*/

function makeNewString (str) {
    if(str.length < 3){
        return str;
    }else {
        return ((str.slice(0, 3) + str.slice(-3)));
}
}

console.log(makeNewString('abc'));
console.log(makeNewString('abcdef'));
console.log(makeNewString('abc123abc123'));

console.log(makeNewString('ab'));


// using arraow function and ternary operator

const makeNewString = (str) => (str.length < 3) ? str : str.slice(0, 3) + str.slice(-3)

console.log(makeNewString('abc'));
console.log(makeNewString('abcdef'));
console.log(makeNewString('abc123abc123'));

console.log(makeNewString('ab'));