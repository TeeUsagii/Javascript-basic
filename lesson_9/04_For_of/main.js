/**
 * For in of
 */
//
var languages = [
    'Javascript',
    'Php',
    'Java'
];

for (var value of languages) {
    console.log(value);
}

//
var myInfo = {
    name: 'Son tung',
    age: 18
};

for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
}
