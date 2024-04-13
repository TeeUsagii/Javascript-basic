/**
 * recursive
 */
//

// var arrray = ['a', 'b', 'c', 'a', 'b', 'c']

// console.log([...(new Set(arrray))])
// xác định điểm dừng
// Logic handle => tạo ra điểm dừng

// function deQuy(num) {
//     num--;
//     // deQuy();
//     if (num < 0) {
//         //Dừng
//         return;
//     } 
//     deQuy();
// }

// deQuy(10)

// function countDown(num) {
//     if(num > 0) {

//         //loop
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }

// countDown(3);


// function loop(start, end, cb) {
//     if (start < end) {
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

// var array = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// loop(0, array.length, function(index) {
//     console.log(array[index])
// });

// function giaiThuat(number) {
//     var output = 1;
//     for (var i = number; i > 0; i--) {
//         output = output * i;
//     }
//     return output;
// }

// console.log(giaiThuat(6));


function giaiThuat(number) {
    if (number > 0) {
        return number * giaiThuat(number - 1);
    }
    return 1;
}

console.log(giaiThuat(6));