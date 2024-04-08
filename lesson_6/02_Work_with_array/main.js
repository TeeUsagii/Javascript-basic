/**
 * Làm việc với array
 * 1. ToString
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(languages);

// console.log(languages.toString());

// console.log(languages.join(', '));

// console.log(languages.pop());// Xóa element cuối mảng và trả về phần tử đã xóa

// console.log(languages);// Mất đi phần tử Ruby (nếu xóa hết thì thành undefined)

// console.log(languages.push('Dart', 'Python')); // thêm 2 element vào mảng trả về độ dài mới

// console.log(languages);

// console.log(languages.shift()); // Xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa

// console.log(languages);

// console.log(languages.unshift('Java'));

// console.log(languages);

// languages.splice(1, 2); // đặt con trỏ vào vị trí element số 1 và bắt đầu từ vị trí đó xóa đi 2 phần tử 

// console.log(languages);

// languages.splice(1, 1, 'Dart', 'Java1') // đặt con trỏ vào vị trí element số 1 và chèn từ vị trí số 1 khi đặt con trỏ các phần tử

// console.log(languages);

var languages2 = [
    'C++',
    'C#'
];

// console.log(languages.concat(languages2)); // ghép mảng

console.log(languages.slice(1, 2)); // cắt mảng từ vị trí 1 đến vị trí 2 

console.log(languages.slice(-2, -1)); // cắt mảng từ vị trí -2 đến vị trí -1 
