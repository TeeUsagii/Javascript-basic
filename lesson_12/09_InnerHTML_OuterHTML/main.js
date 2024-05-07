/**
 * InnerHTML vs OuterHTML Property
 */

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1 class="heading">Heading</h1>';

console.log(document.querySelector('.heading').innerText);

console.log(boxElement.innerHTML);

console.log(boxElement.outerHTML);

boxElement.outerHTML = '<span>Day la span</span>'

// console.log(boxElement.outerHTML);


