/**
 * InnerHTML vs OuterHTML Property
 */

// var boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<h1 class="heading">Heading</h1>';

// console.log(document.querySelector('.heading').innerText);

// console.log(boxElement.innerHTML);

// console.log(boxElement.outerHTML);

// boxElement.outerHTML = '<span>Day la span</span>'

// // console.log(boxElement.outerHTML);


var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var chatLu = document.querySelector('ul');
    var leng = courses.length;
    for (var i = 0; i < leng; i++) {
        chatLu.innerHTML += `<li>${courses[i]}</li>`;
    }
}

render(courses)

function render2(courses) {
    var chatLu = document.querySelector('ul');
    var leng = courses.length;
    var chatVai = courses.map(function(course) {
        return "<li>courses</li>"
    });
}

render(courses)