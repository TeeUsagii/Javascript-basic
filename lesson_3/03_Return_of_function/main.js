/**
 * Return trong hàm - Return of function
 */

// var isConfirm = confirm('Message?');

// console.log(isConfirm);

function cong(a, b) {
    return a + b;
    console.log('123'); //vi no nam sau return nen k chay
}

function tru(a, b) {
    a - b;
}

var result = cong(2, 8);
var result_tru = tru(8, 2);

console.log(result);
console.log(result_tru); //undefined vi k tra ve cai gi ca

//function mang
function mang(a, b) {
    return [a, b];
}

var result_mang = mang(2, 8);
console.log(result_mang);


//function toString
function toStringVjp(a, b) {
    return a.toString() + b.toString();
}

var result_toString = toStringVjp(2, 8);
console.log(result_toString);