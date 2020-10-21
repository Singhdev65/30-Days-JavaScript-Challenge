/* Write a JS program to  check wheather a given array
of integers is sorted in ascending order */


const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i+1] < arr[i])
        return false;
    }
    return true;
}

console.log(isAscending([1,2,5,6,7,8,9]));
console.log(isAscending([1,2,7,6,7,8,9]));
console.log(isAscending([9,8,7,6,5,4,3]));