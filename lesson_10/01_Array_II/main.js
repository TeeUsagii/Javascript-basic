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

// Duyệt qua từng phần tử của mảng
// courses.forEach(function(course, index) {
//     console.log(index, course);
// });

// Kiểm tra các phần tử của mảng thỏa mãn điều kiện gì đó (tất cả)
// var isFree = courses.every(function(course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);

// Kiểm tra các phần tử của mảng thỏa mãn điều kiện gì đó (chỉ cần một)
// var isFree = courses.some(function(course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);

// Tìm kiếm trong mảng
// var course = courses.find(function(course, index) {
//     return course.name === 'Ruby'; // tìm được thằng đầu tiên thì ngừng
// }); //nếu k có ai thì undefined

// console.log(course);

// var listCourse = courses.filter(function(course, index) {
//     return course.name === 'Ruby'; // tìm toàn bộ những ông có tên Ruby
// }); //nếu k có ai thì undefined

// console.log(listCourse);

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(array) {
    var sport = array.filter(function(sport, index) {
        return sport.like > 5;
    });
    return sport;
}




// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
