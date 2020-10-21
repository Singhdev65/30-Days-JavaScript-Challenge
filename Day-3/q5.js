/* Write a JS program to replace the first digits in a
    string (should contains at least digit) with $ character.*/

    const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$');


console.log(replaceFirstDigit('1APrince'));
console.log(replaceFirstDigit('A2Prince'));
console.log(replaceFirstDigit('A3456Prince'));
