/**
 * Kiểu dữ liệu trong Javascript
 * 
 * 1. Primitive Data
 * -    Number
 * -    String
 * -    Boolean
 * -    Undefined
 * -    Null
 * -    Symbol
 * 
 * 2. Complex Data
 * -    Function
 * -    Object
 * 
 */

// Number
var a = 1; 
var aFloat = 1.2334;

//String
var isString = 'this \'is\' string';
// Boolean
var c = true; 
var isSuccess = 1 > 0; 

// Undefined
var d;

// Null
var isNull = null; // nothing

// Symbol
var id = Symbol('id'); // unique
var id2 = Symbol('id'); // unique
//  id === id2  => false
console.log(id === id2); 

// Function

var myFunction = function() {
    alert('Hi xin chao');
}

// Object types
var myObject = {
    name: 'Son Tung',
    age: 18,
    adress: 'Hanoi',

    hiFunction: function () {
        alert('chaoxin')
    }
}

//myObject.hiFunction();

console.log('My Object:', myObject);
console.log('Age:', myObject.age);

var myArray = [
    'Javascript',
    'PHP',
    'Python'
]

console.log(myArray);

//Check var type
console.log(typeof a); // => number
console.log(typeof isNull); // => object