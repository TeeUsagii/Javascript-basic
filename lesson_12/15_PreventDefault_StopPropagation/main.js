// DOM events 

// PreventDefault and StopPropagation

var aElements = document.links;

for (var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        // console.log(e.target.href);

        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

document.querySelector('div').onclick = function(e) {
        console.log('div');
}


document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click me');
}
