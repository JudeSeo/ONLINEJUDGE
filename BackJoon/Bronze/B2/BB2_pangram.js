// 2024-01-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let alp = Array.from({length: 26}, (v, i) => String.fromCharCode(i + 97));
input.forEach(v => {
    if (v == "*") return;
    let temp = v.split("").map(val => val.toLowerCase()).sort();
    let result = "Y";
    alp.forEach(val => {
        if (temp.indexOf(val) == -1) {
            result = "N";
            return;
        }
    })
    answer.push(result);
})
console.log(answer.join("\n"));