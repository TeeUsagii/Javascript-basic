/**
 * Mảng trong JS - Array
 * 
 * 1. Tạo mảng
 * - cách tạo
 * - sử dụng cách nào? tại sao
 * - kiểm tra data type
 * 2. Truy xuất mảng
 * - độ dài mảng
 * - lấy phần tử theo index
 */

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart'
];

var languages1 = new Array(
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    function(){

    },
    {},
    123
);

console.log(languages);
console.log(typeof languages);
console.log(languages1);

//check array
console.log(Array.isArray(languages));
console.log(Array.isArray({}));


//Truy xuất mảng
console.log(languages[0]);
