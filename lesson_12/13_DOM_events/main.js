
//DOM Events
//1. Attribute events
//2. Assign event using the element node

var h1Element = document.querySelectorAll('h1');

for(var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}