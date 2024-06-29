// Default parameter values

// function logger(log) {
//     if(typeof log === 'undefined') {
//         log = 'Default log';
//     }
//     console.log(log);
// }

// function logger(log = 'Default log') {
//     console.log(log);
// }

// logger(undefined);

function logger(log, type = 'log') {
    console[type](log);
}

logger('Message...');

// với tham số cần giá trị không bắt buộc truyền vào thì nên đặt default value