// Classes

// function Course(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function () { return this.name; };
//     var isSuccess = false;
// } // khuôn mẫu có sẵn name và price
// // format giống nhau khác nhau value
// // giống hướng đối tượng

class Course {
    // Class có constructor
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    var isSuccess = false;

    getPrice() {
        return this.price;
    }

    run(){
        const isSuccess = false;

        if(...) {
            isSuccess = true;
        }
    }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);