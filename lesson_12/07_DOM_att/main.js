/**
 * DOM attribute
 */

var headingElement = document.querySelector('h1');

headingElement.className = 'Heading';

headingElement.setAttribute('class', '123');

console.log(headingElement.getAttribute('class'));