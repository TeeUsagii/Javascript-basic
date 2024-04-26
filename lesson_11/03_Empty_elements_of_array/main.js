//forEach, find, filter, some, every, reduce

var courses = [
    'Javascript',
    'PHP'
];

courses.length = 10;

// console.log(courses)

// duyệt qua 10 lần, 8 lần k tồn tại
// for (var i = 0; i < courses.length; i++) {
//     console.log(courses[i]);
// }

// duyệt qua phần tử thực dù độ dài có 10
for (var index in courses) {
    console.log(courses[index]);
}

var khoaHoc = new Array(10);
khoaHoc.push('Java', 'PHP') // độ dài mảng từ 10 lên 12
// có 2 phần tử thực

// in ra 2 vì chỉ có 2 phần tử thực
for (var index in khoaHoc) {
    console.log(khoaHoc[index]);
}