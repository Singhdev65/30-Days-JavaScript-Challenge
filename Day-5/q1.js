/* Write a JS function that returns a passes string 
with letters in alphabetical order. */

const alphabeticalOrder = (str) => 
    str.split('').sort((a,b) => a > b ? 1 : -1)
    .join('');

console.log(alphabeticalOrder('prince'));
console.log(alphabeticalOrder('javascript'));



//program fails if we insert strings in uppercase eg: Prince => Pceinr, javaScript=> Saacijprtv

