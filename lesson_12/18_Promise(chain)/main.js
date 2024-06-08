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


// Promise (chain)

// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         //Logic
//         // Thành công: resolve()
//         // Thất bại: reject()
//         //nếu k resolve hay reject thi bi memory leak
//         // resolve(); //Fulfilled
//         // reject(); //Reject
//         resolve();
//     }
// )

// promise
//     .then(function () {
//         return new Promise(function(resolve){
//             setTimeout(resolve, 3000);
//         })
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (data) {
//         console.log
//     })
//     .finally(function () {

//     })

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
    })