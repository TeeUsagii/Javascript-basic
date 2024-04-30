/**
 * forEach
 */

var courses = [
    'Java',
    'PHP',
    'Ruby'
]

// courses.length = 1000;

//output =

// courses.forEach(function(courses, index, array) {
//     console.log(courses, index, array);
// });

// console.log(output)

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

courses.forEach2(function(courses, index, array) {
    console.log(courses, index, array);
});