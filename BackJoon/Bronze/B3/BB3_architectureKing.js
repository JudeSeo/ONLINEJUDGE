// 2022-09-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
input = input.slice(1);
for (let i = 0; i < input.length; i++) {
    let aTemp;
    let bTemp;
    if (i == input.length - 1) {
        aTemp = input[i].split(" ").map(v => Number(v));
        bTemp = input[0].split(" ").map(v => Number(v));
    } else {
        aTemp = input[i].split(" ").map(v => Number(v));
        bTemp = input[i + 1].split(" ").map(v => Number(v));
    }
    if (aTemp[0] == bTemp[0])
        answer += Math.abs(aTemp[1] - bTemp[1])
    else
        answer += Math.abs(aTemp[0] - bTemp[0])
}
console.log(answer);