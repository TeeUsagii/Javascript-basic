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

function courseHandler(course, index,) {
    // return {
    //     id: course.id,
    //     name: `Khoa hoc: ${course.name}`,
    //     coin: course.coin,
    //     coinText: `Gia: ${course.coin}`,
    //     index: index,
    //     originArray: originArray,
    // };
    return course.name;
}

var newCourse = courses.map(courseHandler);

console.log(newCourse);