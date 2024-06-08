// 2. JSON

// là một định dạng dữ liệu (chuỗi)
// Javascript Object Notation

// JSON: Number, String, Boolean, Null, Array, Object

// Mã hóa / giải mã
// Encode / decode
// Stringify: Javascript types -> JSON
// Parse: JSON -> Javascript types

// var json = '["Javascript", "PHP"]'; //JSON Array

var json = '{"name":"Son tung","age":18}';  //JSON Object

var a = '"abc"';

var object = JSON.parse(json);

console.log(object)

console.log(JSON.stringify([
    'Javascript',
    'PHP',
]))

console.log(JSON.stringify({
    name: 'Son Tung',
    age: 18,
    test: function() {}
}))