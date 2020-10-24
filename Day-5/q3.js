/* Write a JS function to extract unique character from
a string */


// const getUniqueChars = (str) => 
//     str.split('').filter(
//         (item, index, arr) =>
//             arr.slice(index + 1).indexOf(item) === -1
//     );

//     console.log(getUniqueChars('aaaaaaabbbccc'));


const getUniqueChars = (str) => 
    [... new Set(str.split(''))];

console.log(getUniqueChars('aaaaaaabbbccc'));



