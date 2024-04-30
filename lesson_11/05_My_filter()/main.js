/**
 * My filter() method
 */

var courses = [
    {
        name: 'Javascript',
        coin: '680'
    },
    {
        name: 'PHP',
        coin: '460'
    },
    {
        name: 'Ruby',
        coin: '720'
    },
    {
        name: 'Python',
        coin: '980'
    }
];

Array.prototype.filter2 = function(callback) {
    var output = [];
    
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var filterCourses = courses.filter2(function (courses, index, array) {
    return courses.coin > 700;
});

console.log(filterCourses)