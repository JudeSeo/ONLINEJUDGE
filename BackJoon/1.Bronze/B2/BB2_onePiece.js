// 2024-02-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
input[0] = input[0].split("");
for (let i = 0; i < input[0].length; i++) {
    let str = input[0].slice(i, i + input[1].length).join("");
    if (str == input[1]) answer++;
}
console.log(answer);