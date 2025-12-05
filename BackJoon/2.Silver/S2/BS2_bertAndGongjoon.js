// 2025-12-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
let max = Math.max(...input);
let arr = [0, 0, 1, 1]
for (let i = 3; i < 2 * max; i++) {
    let root = Math.sqrt(i);
    if (i != 2 && i % 2 == 0) {
        arr[i] = 0;
        continue;
    }
    let chk = 0;
    for (let j = 3; j <= root; j++) {
        if (i % j == 0) {
            chk++;
            break;
        }
        j++
    }
    if (chk == 0) arr[i] = 1;
    else arr[i] = 0;
}
input.forEach(v => {
    if (v == 0) return;
    let cnt = arr.slice(v + 1, 2 * v + 1).filter(val => val == 1).length;
    answer.push(cnt);
})
console.log(answer.join("\n"));
