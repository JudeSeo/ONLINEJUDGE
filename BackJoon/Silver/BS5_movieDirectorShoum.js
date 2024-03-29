// 2024-03-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
let num = 666;
while (true) {
    if (num.toString().indexOf("666") > -1) answer++;
    if (answer == input) break;
    num++;
}
console.log(num);