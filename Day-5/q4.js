/* Write a JS function to find the first not repeated 
character */

const getNonRepeatedChars = (str) =>
    str.split('')
        .filter((item, index, arr) =>
            arr.filter(arrItem => arrItem === item)
            .length === 1
        );

console.log(getNonRepeatedChars('abacddbec'));
console.log(getNonRepeatedChars('pprriinnocceeeeeee'));