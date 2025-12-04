// 2024-01-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let str = "";
for (let i = 1; i <= input; i++) {
    str += i
}
console.log(str.indexOf(input) + 1);
