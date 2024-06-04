// DOM events

//1. input / select
//2. Key up / Key down

var inputValue;

var inputValueCheck;

var inputElement = document.querySelector('input[type="text"]');

// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }

inputElement.oninput = function (e) {
    inputValue = e.target.value;
    // console.log(inputValue);
}

var inputElement1 = document.querySelector('input[type="checkbox"]');

inputElement1.onchange = function (e) {
    inputValueCheck = e.target.checked;
    console.log(inputValueCheck);
}

var inputElement2 = document.querySelector('select');

inputElement2.onchange = function (e) {
    console.log(e.target.value)
}

var inputElement3 = document.querySelector('.key');

inputElement3.onkeyup = function (e) {
    // console.log(e.target.value)

    console.log(e.which);

    switch (e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}


document.onkeydown = function (e) {
    switch (e.which) {
        case 27:
            console.log('exit');
            break;
        case 13:
            console.log('send chat');
            break;
    }
}