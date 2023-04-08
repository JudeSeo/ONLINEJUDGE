// 2023-04-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = Number(input.splice(0, 1));
let k = input.splice(input.length - 1);
let answer = [];
if (k == 1) answer = input.slice(0);
else if (k == 2) {
    for (let i = 0; i < num; i++) {
        let str = ""
        for (let j = num - 1; j >= 0; j--) {
            str += input[i].split("")[j]
        }
        answer.push(str);
    }
} else {
    for (let i = num - 1; i >= 0; i--) {
        let str = ""
        for (let j = 0; j < num; j++) {
            str += input[i].split("")[j]
        }
        answer.push(str);
    }
}
console.log(answer.join("\n"));