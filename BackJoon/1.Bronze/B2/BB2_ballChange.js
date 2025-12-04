// 2023-11-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [n, m] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let ball = new Array(n + 1).fill(0);
for (let i = 0; i <= n; i++) {
    ball[i] = i;
}
input.forEach(v => {
    let temp = v.split(" ");
    let tmp = ball[temp[0]];
    ball[temp[0]] = ball[temp[1]];
    ball[temp[1]] = tmp;
})
console.log(ball.slice(1).join(" "));