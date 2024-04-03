/**
 * 1. Khi đặt function trùng tên?
 * 2. Khai báo biến trong hàm?
 * 3. Định nghĩa hàm trong hàm?
 */

// 1.Khi đặt function trùng tên
function showDiaglog() {
    console.log('Show diaglog 1');
}

function showDiaglog() {
    console.log('Show diaglog 2');
}

//function 1 bị ghi đè bởi function sau
showDiaglog();

// 2. Khai báo biến trong hàm?

function showName() {
    var fullName = 'Son Tung';// bien local
}
//private nên k gọi được
// showName(fullName);

// 3. Định nghĩa hàm trong hàm?

function showMessage() {
    console.log('Chao xin');
    alert('chaoxin')
}

showMessage();
