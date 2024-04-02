/**
 * Logic operators
 * && - and
 * || - or
 * ! - Not
 */

var a = 1;
var b = 2;
var c = 3;

var d = true || false
var e = false || true
var f = true && false

console.log(d)
console.log(e)
console.log(f)

// if a > 0 and b > 0 or c > 0 
//print 'Dieu kien dung'
// if (a > 0 && b > 0 || c > 0) {
//     console.log('Dieu kien dung')
// }

// not print
if (!(a > 0)) {
    console.log('Dieu kien dung');
}

//not print
if (d > a) {
    console.log('Dieu kien dung');
}

//print
if (d == true) {
    console.log('Dieu kien dung');
}
