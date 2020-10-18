/* write a js program to check two numbers and return true 
 if one of the number 
is 100 or if the sum of two number is 100 */

// ---------------conditionals------------

var num1 =15;
var num2;

if(((num1 || num2) == 100) ||  (num1 + num2 == 100)){
	 console.log(true);
}else{
	console.log(false);
}

// ------------function----------------

const isEqualTo100 = (a,b) => a===100 || b ===100 || (a + b)===100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(25,75));
console.log(isEqualTo100(15,75));
console.log(isEqualTo100(25,85));