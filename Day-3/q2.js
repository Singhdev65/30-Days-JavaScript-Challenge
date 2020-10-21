/* Write a JS program to find the sumber of even 
values upto a given number */

const countEvenNumbers = (arr) =>
arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for (let i=1; i<=num; i+=1) {
        returnArray.push(i);
    }
    return returnArray;
}

console.log(countEvenNumbers(createArrayOfNumbers(6)));
console.log(countEvenNumbers(createArrayOfNumbers(9)));
