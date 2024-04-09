/**
 * Câu lệnh rẽ nhánh Switch
 */

var date = 7;

switch(date) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
    case 6:
        console.log('Hôm nay là thứ 5, 6');
        break;
    default:
        console.log('K biet');
}