// 2025-12-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => Number(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
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
    let cnt = 0;
    let temp = arr.slice(0, v + 1);
    for (let i = 0; i < v / 2 + 1; i++) {
        if (temp[i] == 1 && temp[v - i] == 1) cnt++;
    }
    answer.push(cnt);
})
console.log(answer.join("\n"));
