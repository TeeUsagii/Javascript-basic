/**
 * HTML DOM
 */

// var boxNode = document.querySelector('.box-1');

// Sử dụng tới boxNode

// sử dụng tới các li elements
//là con của `.box-1`

// console.log(boxNode.querySelector('p'));
// console.log(boxNode.getElementsByTagName('p'));

var headings = document.querySelectorAll('.heading');

for (var i = 0; i < headings.length; i ++) {
    console.log(headings[0])
}

console.log(document.forms[1]);