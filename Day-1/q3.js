/* Write  a JS program to replace every character in a given
string with the character following it in the alphabet */

const moveCharsForward = (str) => 
str
.split('')
.map(char => String.fromCharCode(char.charCodeAt
(0) + 1))
.join('');

console.log(moveCharsForward('abcd'));

    // ----------.replace--------------


function letterChanges (str) {
    return str.replace(/[a-zA-Z]/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0)+1);
    });
}

console.log(letterChanges('prince'));
