// 2023-09-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [t, d, m] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let answer = "Y"
input.push(d);
if (input[0] < t) {
    let flag = false;
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i + 1] - input[i] >= t) flag = true;
    }
    if (!flag) {
        answer = "N";
    }
}
console.log(answer);