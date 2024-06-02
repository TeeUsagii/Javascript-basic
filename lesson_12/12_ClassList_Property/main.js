//ClassList property

//add
//contains
//remove
//tonggle

var boxElement = document.querySelector('.box');

console.log(boxElement.classList[1]);

// boxElement.classList.add('red', 'blue');

console.log(boxElement.classList.contains('red'))

// boxElement.classList.remove('red');

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);
