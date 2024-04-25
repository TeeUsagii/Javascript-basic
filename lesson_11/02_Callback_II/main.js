//callback phần 2

//1. Là hàm
//2. được truyền qua đối số
//3. Được gọi lại (trong hàm nhận đối số)

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

Array.prototype.map2 = function (callback) {
    var output = [];
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }

    return output;
}

var htmls = courses.map2(function (courses) {
    return `<h2>${courses}</h2>`;
});

console.log(htmls.join(''));



// var htmls = courses.map(function(courses) {
//     return `<h2>${courses}</h2>`;
// });

// console.log(htmls.join(''));

//forEach, reduce, find, filter

var arr = [1, 2, 3, 4, 5, 1, 2, 3];

// console.log(arr)

Array.prototype.forEach2 = function(callback) {
    var length = this.length;
    var i = 0;
    for (; i < length; i++) {
        callback(this[i]);
    }
}



Array.prototype.reduce2 = function (cb, init) {
    var len = this.length;
    var i = 0
    if (arguments.length < 2) {
        i = 1;
        init = this[0]
    }
    for (; i < len; i++) {

        init = cb(init, this[i], i, this);
    }
    return init
}

function sum(a, b) { return a + b };

//console.log(arr.reduce(sum) === arr.reduce2(sum))
//console.log(arr.reduce(sum,0) === arr.reduce2(sum,0))



Array.prototype.find2 = function (cb) {
    var len = this.length;
    var i = 0
    for (; i < len; i++) {
        if (cb(this[i], i)) {
            return this[i]
        }
    }
    return undefined
}

//console.log(arr.find2((a)=>{return a === 2}))



Array.prototype.filter2 = function (cb) {
    var len = this.length;
    var i = 0
    var r = []
    for (; i < len; i++) {
        if (cb(this[i], i)) {
            r.push(this[i])
        }
    }
    return r
}

//console.log(arr.filter2((a)=>{return a === 22}))
