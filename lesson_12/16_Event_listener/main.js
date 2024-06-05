// 1. Event listener
// 2. JSON
// 3. Fetch
// 4. DOM loaction
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Pratices
// 9. Mistakes
// 10. Performance

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / hủy bỏ lắng nghe

var btn = document.getElementById('btn');

// DOM Events
// xu ly nhieu viec

// btn.onclick = function() {
//     // viec 1
//     console.log('Viec 1');
//     //viec 2
//     console.log('Viec 2');
//     //viec 3
//     alert('Viec 3');
// }

// vd sau 3s moi click duoc

// setTimeout(function() {
//     btn.onclick = function() {
//         // viec 1
//         console.log('Viec 1');
//         //viec 2
//         console.log('Viec 2');
//         //viec 3
//         alert('Viec 3');
//     }
// }, 3000);

// vd sau 3 giay sau k click duoc nua 

// btn.onclick = function() {
//     // viec 1
//     console.log('Viec 1');
//     //viec 2
//     console.log('Viec 2');
//     //viec 3
//     alert('Viec 3');
// }

// setTimeout(function() {
//     btn.onclick = function() {};
// },3000);

//Event listener

btn.addEventListener('click', function(e) {
    console.log(Math.random());
});

btn.addEventListener('click', function(e) {
    console.log('Evt 1');
});

btn.addEventListener('click', function(e) {
    console.log('Evt 2');
});

//vd 
function viec1() {
    console.log('viec 1');
}

function viec2() {
    console.log('viec 2');
}


btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);



// go listener

setTimeout(function () {
    btn.removeEventListener('click', viec1)
}, 3000);