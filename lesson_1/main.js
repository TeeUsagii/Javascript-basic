/**
 * 1 so ham Buil-in function
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */


var fullName = 'Kaneki Ken'

// console.log(fullName) //in ra bien trong console 
// console.warn(fullName) //in ra bien canh bao trong console 

// confirm('Xac nhan la kieu anh hay k');

// prompt('Xac nhan la kieu anh hay k');


//1 lan
// setTimeout(function() {
//     alert('Kieu anh')
// }, 1000)

//lien tuc theo thoi gian
setInterval(function() {
    console.log(fullName + Math.random())
}, 1000)
