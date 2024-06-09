// 3. Promise (sync, async)

// Sync
//  chạy theo luồng
//
// Async
// 
// setTimeout, setInterval, fetch, 
// XMLHttpRequest, filereading
// request animation frame
// viết trước chưa chắc đã chạy trước



// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('Co loi!');
//         })
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });


// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = new Promise (
//     function (resolve, reject) {
//         // thanhcong('Success!');
//         reject('Error!');
//     }
// );

//1.
// var promise = Promise.resolve('Success!');
//2.
// var promise = Promise.resolve('Error!');


// promise
//     .then(function(result) {
//         console.log('resul: ', result);
//     })
//     .catch(function(result) {
//         console.log('result: ', result)
//     })

//3.
var promis1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
);

var promis2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000);
    }
);

Promise.all([promis1, promis2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    });
