/**
 *Do While
 */
//
var i = 0;

var isSuccess = false;

do {
    i++;
    console.log('Nạp thẻ lần ' + i);
    //Thành công
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 3);