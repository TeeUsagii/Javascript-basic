/**
 * InnerText vs textContent Property
 */

var headingElement = document.querySelector('.box-1 .heading');

console.log(headingElement.innerText);
console.log(headingElement.textContent);

headingElement.innerText = 'New heading' // textContent cũng được
// mã js được thực thi mới thay đổi còn source vẫn v
console.log(headingElement.textContent);

