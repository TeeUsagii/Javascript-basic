/**
 * Array II
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 4000
    }
];

// function courseHandler(course, index,) {
//     // return {
//     //     id: course.id,
//     //     name: `Khoa hoc: ${course.name}`,
//     //     coin: course.coin,
//     //     coinText: `Gia: ${course.coin}`,
//     //     index: index,
//     //     originArray: originArray,
//     // };
//     return course.name;
// }

// var newCourse = courses.map(courseHandler);

// console.log(newCourse);

//cách 1
// Biến lưu trữ
// var totalCoin = 0;

//Thực hiện việc lưu trữ 
// for (var course of courses) {
//     totalCoin += course.coin;
// }

// console.log(totalCoin);

//cách 2
// Biến lưu trữ accumulator
// Giá trị hiện tại currentValue (mỗi khi gọi lại function sẽ ở 1 vị trí nào đó trong array)
// CurrentIndex là chỉ mục của thg currentValue (vd value là 2 thì thg index là 1)
// ogriginArray là mảng gốc

// function coinHandler(accumulator, currentValue) {
//     var total = accumulator + currentValue.coin;

//     // console.table({
//     //     'Lượt chạy: ': i,
//     //     'Biến tích trữ: ': accumulator,
//     //     'Giá khóa học: ': currentValue.coin,
//     //     'Tích trữ được: ': total
//     // });

//     return total;
// }

// var totalCoin = courses.reduce(coinHandler, 0); // giá trị khởi tạo bằng 0

// console.log(totalCoin);

//viết ngắn gọn
var totalCoin = courses.reduce(function(accumulator, currentValue) {
    var total = accumulator + currentValue.coin;
    return total;
}, 0);

console.log(totalCoin);

//es6
var totalCoin = courses.reduce((a,b) =>
    a + b.coin, 0
);

console.log(totalCoin);
