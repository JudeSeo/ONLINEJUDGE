// 2023-09-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
let temp = input[0].split(" ")
switch (input[1]) {
    case "heat":
        answer = Math.max(temp[0], temp[1])
        break;
    case "freeze":
        answer = Math.min(temp[0], temp[1])
        break;
    case "auto":
        answer = temp[1]
        break;
    case "fan":
        answer = temp[0]
        break;
}
console.log(answer);