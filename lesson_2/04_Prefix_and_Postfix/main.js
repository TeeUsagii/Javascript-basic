/**
 * toán tử ++ --
 * Prefix and Postfix
 */

var a = 6;

// Việc 1: Cộng 1 cho a, a = a + 1 => a = 7
// Việc 2: Trả về a sau khi cộng 1
// console.log(++a);


// Việc 1: 'a copy' , 'a copy' = 6
// Việc 2: cộng 1 của a, a = a + 1 = 7
// Việc 3: Trả về biến 'a copy' 
// var output = a++;

// console.log('Out put:', output)
// console.log(a)

var output = a++ + --a;

// a ban đầu bằng 6, a sau bằng 7
// a sau -- còn 6
// 6 + 6
console.log(output)