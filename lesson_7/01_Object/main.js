/**
 * Object trong Javascript
 * 
 */

var emailKey = 'email';

var myInfo = {
    //Key: Value,
    
    //Others --> thuộc tính / property
    name: 'Son Tung',
    age: 18,
    address: 'Hanoi, VN',
    [emailKey]: 'sonton@123.com',

    //Function --> phương thức / method
    getName: function() {
        return this.name;
        // return myInfo.nanme; dùng cách trên tránh sau này đổi tên obj
    }
};

console.log(myInfo);

//add key
myInfo.email = 'sontung@mail.com';// thêm key email có giá trị vào đối tượng myInfo
console.log(myInfo);

myInfo['my-number'] = '02314333';// thêm key my-number vào đối tượng myInfo

console.log(myInfo);

//
console.log(myInfo.age);// in key age ra console.log

console.log(myInfo['mail']);//in value key maill ra console.log (k có nên in ra undefined)

console.log(myInfo['email']);// in value key email ra console.log

var myKey = 'address'

console.log(myInfo[myKey]);// in value key address ra console.log

//delete age
delete myInfo.age;
console.log(myInfo);

// Function --> phương thức
console.log(myInfo.getName());// in ra name bằng function trong obj
