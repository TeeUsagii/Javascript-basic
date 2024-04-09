/**
 * 03_Ternary_operator - Toán tử 3 ngôi
 */

var couser = {
    name: 'Javascript',
    coin: 250
}

// if (couser.coin > 0) {
//     console.log(`${couser.coin} Coins`);
// } else {
//     console.log('Miễn phí');
// }
// vế 1 điều kiện ? vế 2 kết quả in ra khi coin lớn hơn 0 : vế 3 in ra nếu nhỏ hơn 0 
var result = couser.coin > 0 ? `${couser.coin} Coins` : 'Miễn phí'; 
console.log(result);

var a = 1;
var b = 2;

var c = a > 0 ? a : b;