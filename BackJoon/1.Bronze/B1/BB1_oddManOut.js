// 2024-06-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let number = 1;
while (input.length > 0) {
    let num = input.splice(0, 1)[0];
    let temp = input.splice(0, 1)[0].split(" ").map(v => Number(v)).sort((a, b) => a - b);
    for (let i = 0; i < temp.length; i += 2) {
        if (temp[i] != temp[i + 1]) {
            answer.push(`Case #${number}: ${temp[i]}`);
            break;
        }
    }
    number++;
}
console.log(answer.join("\n"));
