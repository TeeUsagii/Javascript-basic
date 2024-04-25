/**
 * là hàm (funtion) được truyền qua đối số
 * khi gọi hàm khác
 */

//1. Là hàm
//2. được truyền qua đối số

function myFunction(param) {
    if (typeof param === 'function') {
        param('Học lập trình');
    }
}

function myCallback(value) {
    console.log('Value: ', value)
}

myFunction(myCallback);