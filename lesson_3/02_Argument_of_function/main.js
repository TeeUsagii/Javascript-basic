/**
 * 1.Tham số - Argument
 * - Định nghĩa
 * - Kiểu dữ liệu
 * - Tính private
 * - 1 tham số
 * - Nhiều tham số
 * 2. Truyền tham số
 * - 1 tham số
 * - Nhiều tham số
 * 3. Arguments?
 * - Đối tượng arguments
 * - Giới thiệu vòng for
 */

function writeLog(message) {
    console.log(message);
}

writeLog('Hi how are you?');
writeLog(['Php', 'Java']);

function writeLog2(message, message2) {
    console.log(message);
    console.log(message2);
}

writeLog2('Test');// message2 is undefined
writeLog2('Test', 'Hi1');

function writeLog3(message, message2) {
    if (message) {
        console.log(message);
    }
    if (message2) {
        console.log(message2);
    }
}

writeLog3('Log 1');
writeLog3( '', 'Log 2');

//3. Arguments?

function writeLog4() {
    console.log(arguments)
}

writeLog4('Log 1', 'Log 2');

    // for
    function writeLog5() {
        var myString = '';
        for ( var param of arguments) {
            myString += `${param} - `
        }
        console.log(myString)
    }
    
    writeLog5('Log 1', 'Log 2', 'Log 3', 1 , 3);