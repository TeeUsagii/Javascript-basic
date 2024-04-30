/**
 *  My some() method
 */

var courses = [
    {
        name: 'Javascript',
        coin: '680',
        isFinish: false
    },
    {
        name: 'PHP',
        coin: '460',
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: '720',
        isFinish: true
    },
    {
        name: 'Python',
        coin: '980',
        isFinish: false
    }
];

Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            };
        }
    }
    return false;
}

var result = courses.some2(function(courses, index, array) {
    return courses.isFinish;
});

console.log(result);