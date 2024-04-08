/**
 * Object prototype - Basic
 * 
 * 1. Prototype là gì?
 * 2. Sử dụng
 */
//constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

var user1 = new User('Sơn', 'Tùng', 'Avatar 1');
var user2 = new User('Sơn', 'Núi', 'Avatar 2');

console.log(user1.getName);
console.log(user2.getClassName());