/**
 * đối tượng date
 */

var date = new Date();
var date1 = Date();

console.log(date);
console.log(typeof date);//obj

console.log(date1);
console.log(typeof date1);//string

var year = date.getFullYear();
console.log(year);

var month = date.getMonth() + 1; // 0 - 11
console.log(month);

var day = date.getDate();
console.log(day);

//date object javascript mozilla