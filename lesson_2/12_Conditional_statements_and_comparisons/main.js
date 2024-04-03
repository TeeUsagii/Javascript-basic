/**
 * Toán tử so sánh 2 - Comparison operators 2
 * 0
 * false
 * null
 * NaN
 * undefined
 */

var a = 1;
var b = 2;

var result = a < b && a < 0;// này là kết quả của vế phải
console.log('result', result);

var sult = 'A' && 'B' && 'C';// đọc vế trái => k nằm trong 6 giá trị false => gán giá trị bằng 'A' => quay sang đọc giá trị của thg thứ 2 rồi tiếp tục cho tới hết hoặc gặp thg nào có giá trị trong 6 thằng false
console.log(sult);

var sult1 = 'A' || 'null' || 'C'; // đọc vế trái thấy khác 6 giá trị false là lấy luôn
console.log(sult1);

// if (a < b) {
//     console.log('A < B');
// } else {
//     console.log('A > B');
// }

