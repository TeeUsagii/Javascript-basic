/**
 * String in Javascript
 * 
 * 1. Create String
 * - Các cách tạo chuỗi
 * - Nên dùng cách nào? Lý do
 * - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

var fullName = 'Son Tung';
var typeSlash = 
'Day la dau dai vai dai vai dai vai dai vai\\';

var typeSlash1 = 
'Day la dau dai vai dai vai dai vai dai vai\\'
+ '1. Day la dau dai vai dai vai dai vai dai vai'
+ '2. Day la dau dai vai dai vai dai vai dai vai'
;

var fistName = new String('Kieu anh');


console.log(fullName.length)

var isNumber1 = '1'
var  isNumber2 = '2'

console.log(`Day la so: ${isNumber1} ${isNumber2}`);