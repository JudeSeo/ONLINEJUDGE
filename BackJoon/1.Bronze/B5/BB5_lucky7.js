// 2024-07-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 0;
if (input.indexOf("7") > -1) {
    if (input % 7 == 0) answer = 3
    else answer = 2
} else {
    if (input % 7 == 0) answer = 1
    else answer = 0
}
console.log(answer);