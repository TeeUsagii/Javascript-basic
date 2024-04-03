/**
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

// 1. Declaration function
// có thể gọi trước khi định nghĩa
showMessage();

function showMessage() {
    console.log('Declaration function');
}

// 2. Expression function
// k cần đặt tên cũng được
// showMessage2(); //không gọi được khi chưa định nghĩa

var showMessage2 = function() {
    console.log('Expression function');
}

showMessage2();

setTimeout(function autoLogin() {
    console.log('Expression function setTimeout');
});

var myObject = {
    myFunction: function showLog() {
        console.log('Expression function Object');
    }
}


myObject.myFunction();