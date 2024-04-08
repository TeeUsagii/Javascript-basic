/**
 * Object constructor
 * 
 * 
 */

//quy ước chung là viết hoa chữ cái đầu

//Declaration 
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//cách 2 Expression 
// var User = function(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

var author = new User('Son', 'Tung', 'Avatar');
var user = new User('Vũ', 'Nguyễn', 'Avatar');

author.title = 'Chia sẽ dạo tại HHH';
user.comment = 'Bao giờ mình mới có khóa học mới nhỉ';

console.log(author);
console.log(author.getName());

console.log(user);
console.log(user.getName());

console.log(user.constructor === User);// check bản thiết kế