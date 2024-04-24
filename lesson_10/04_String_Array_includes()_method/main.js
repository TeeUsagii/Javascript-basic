// includes() method

// console.log(Array.prototype.includes);

var title = 'Responsive Web Design';

console.log(title.includes('Responsive'));
// Kiem tra xem co tu nao giong k

var courses = ['Javascript', 'PHP', 'Dart'];

// số phần tử 3 + -1 = 2 tìm từ vị trí số 2
console.log(courses.includes('Javascript',-1));
console.log(courses.includes('Javascript'));

// 1 chuỗi có trong một chuỗi
// 1 phần tử có trong một mảng hay k 