/**
 *07_Break_continue_in_loop
 */
//

for (var i = 0; i < 10; i++) {
    console.log(i);
    break; // bỏ qua vòng lặp luôn
}

for (var i = 0; i < 10; i++) {
    if (i%2 !== 0) {
        continue;
    }
    console.log(i);
}