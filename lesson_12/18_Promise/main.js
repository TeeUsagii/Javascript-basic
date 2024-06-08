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


// Promise (concept)
// Callback

//1. new Promise
//2. Excutor


//1. Peadding
//2. Fulfilled
//3. Reject
var promise = new Promise(
    // Executor
    function (resolve, reject) {
        //Logic
        // Thành công: resolve()
        // Thất bại: reject()
        //nếu k resolve hay reject thi bi memory leak
        // resolve(); //Fulfilled
        // reject(); //Reject


        // //fake api
        // resolve([
        //     {
        //         id: 1,
        //         name: 'Javascript'
        //     }
        // ]);

        // vd loi 
        reject(123);
    }
)

promise
    .then(function (courses) {
        console.log(courses)
    })
    .catch(function (error) {
        console.log(error)
    })
    // 
    .finally(function () {
        console.log('Done!')
    });
