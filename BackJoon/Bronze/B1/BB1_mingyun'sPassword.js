// 2025-03-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
for (let i = 0; i < input.length; i++) {
    let temp = input[i].split("").reverse().join("");
    if (input.find(val => val == temp) != null) {
        answer.push(temp.length);
        answer.push(temp[Math.floor(temp.length / 2)]);
        break;
    }
}
console.log(answer.join(" "));
