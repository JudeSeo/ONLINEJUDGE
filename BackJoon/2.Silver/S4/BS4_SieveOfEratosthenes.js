// 2025-12-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let arr = new Array(input[0] + 1).fill(1);
arr[0] = 0;
arr[1] = 0;
let answer = 0;
let cnt = 0;
for (let i = 2; i <= input[0]; i++) {
    if (answer != 0) break;
    if (arr[i] == 0) continue;
    let min = i;
    while (min <= input[0]) {
        if (arr[min] != 0) {
            arr[min] = 0;
            cnt++;
        }
        if (cnt == input[1]) {
            answer = min;
            break;
        }
        min += i;
    }
}
console.log(answer);
