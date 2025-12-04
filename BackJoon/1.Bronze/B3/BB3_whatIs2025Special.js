// 2025-04-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
let answer = -1;
for (let i = Number(input) + 1; i <= 9999; i++) {
    let temp = i.toString();
    let tempFirst = Number(temp.slice(0, 2));
    let tempSecond = Number(temp.slice(2));
    temp = Number(temp);
    if ((tempFirst + tempSecond) ** 2 == temp) {
        answer = temp;
        break;
    }
}
console.log(answer);
