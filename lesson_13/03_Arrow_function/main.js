// const logger = (log) => {
//     console.log(log);
// }

// logger('Message...');

// const sum = (a,b) => {
//     return {
//         a: a,
//         b: b
//     }
// };

// const sum = (a, b) => ({ a: a, b: b});

// console.log(sum(1, 2));

// const logger = log => console.log(log);

// logger('Message...');

// const course = {
//     name: 'Javascript basic!',
//     getName: function() {
//         return this; //Context
//     }
// };

// const course = {
//     name: 'Javascript basic!',
//     getName: () => {
//         return this; 
//     }
// };

// console.log(course.getName());

const Course = function(name, price) {
    this.name = name;
    this.price = price;
}

// const Course = (name, price) => {
//     this.name = name;
//     this.price = price; 
// } // not used constructor

const jsCourse = new Course('Javascript', 100)

console.log(jsCourse);