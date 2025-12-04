// 2024-08-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let a = Math.floor(v / 5);
    let b = v % 5;
    let str = "";
    while (a > 0) {
        str += "++++ ";
        a--;
    }
    while (b > 0) {
        str += "|";
        b--
    }
    answer.push(str.trim());
})
console.log(answer.join("\n"));