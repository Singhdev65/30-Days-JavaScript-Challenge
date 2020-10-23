/* Given a year, report if its a leap year. */

const isLeapYear = (year) => year % 4 === 0;


console.log(isLeapYear(2014));
console.log(isLeapYear(2016));
console.log(isLeapYear(2018));
console.log(isLeapYear(2024));