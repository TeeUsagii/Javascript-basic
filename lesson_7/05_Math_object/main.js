/**
 * Math Object
 * 
 * thường sử dụng
 * Math.PI
 * Math.round()
 * Math.abs()
 * Math.ceil()
 * Math.floor()
 * Math.random()
 * Math.min()
 * Math.max()
 * 
 */

console.log(Math.PI);

console.log(Math.round(1.3)); // làm tròn số 49 thì làm tròn xuống

console.log(Math.abs(-4));

console.log(Math.ceil(4.1244124141)); //dù có giá trị nhỏ nhất lớn hơn 0 sẽ làm tròn trên

console.log(Math.floor(4.9999)); // luôn làm tròn dưới

console.log(Math.random()); // tạo ra dãy số ngẫu nhiên nhỏ hơn 1

console.log(Math.floor(Math.random() * 10)); // tạo số ngẫu nhiên trong khoảng 0 đến 9

var random = Math.floor(Math.random() * 4); // làm tròn dưới

var bonus = [
    '10 coin', //0
    '20 coin', //1
    '30 coin', //2
    '40 coin', //3
]

console.log(bonus[random]);

var randomUp = Math.floor(Math.random() * 100); // làm tròn dưới nên 0 - 99

if (randomUp < 5) {
    console.log('Thành công!');
} else {
    console.log('Xịt!');
}

console.log(Math.min(-100, 1, 90, 50, 40));

console.log(Math.max(-100, 1, 90, 50, 40));

