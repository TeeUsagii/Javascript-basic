/**
 * For in loop
 */
//
var myInfo = {
    name: 'Son tung',
    age: 18,
    address: 'Hanoi, Vn'
};

for(var key in myInfo) {
    console.log(myInfo[key]);
}
//
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

for(var key in languages) {
    console.log(languages[key]);
}
//
var myString = 'Javascript';

for(var key in myString) {
    console.log(myString[key]);
}