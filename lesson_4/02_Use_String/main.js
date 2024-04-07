//Lam viec voi chuoi

var myString = '   Chao mung ban den voi den   '

//Javascript string methods

//1. Length
// console.log(myString.length);

//2. Find index
// console.log(myString.indexOf('den'));
// console.log(myString.lastIndexOf('den'));
// console.log(myString.indexOf('123'));
// console.log(myString.search('den'));

//3. Cut string
// console.log(myString.slice(14,17))
// console.log(myString.slice(14))
// console.log(myString.slice(0))
// console.log(myString.slice(-3, -1))

//4. Replace
console.log(myString.replace('den', 'trang'));
console.log(myString.replace(/den/g, 'trang'));

//5. Convert to upper case
console.log(myString.toUpperCase());
//6. Convert to lower case
console.log(myString.toLowerCase());

//7. Trim
console.log(myString.trim())
//8. Split
var languages = 'Javscript, PHP, Ruby';

console.log(languages.split(', '))

//9. Get a character by index

console.log(myString.charAt(10))

