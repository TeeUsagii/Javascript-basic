/**
 *  My some() method
 */

var courses = [
    {
        name: 'Javascript',
        coin: '680',
        isFinish: true
    },
    {
        name: 'PHP',
        coin: '460',
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: '720',
        isFinish: true
    },
    {
        name: 'Python',
        coin: '980',
        isFinish: true
    }
];

Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}

var result = courses.every2(function(courses, index, array) {
    return courses.coin < 100;
});

console.log(result);