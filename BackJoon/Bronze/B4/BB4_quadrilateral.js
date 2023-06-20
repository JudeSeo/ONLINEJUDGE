// 2023-06-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let str = "";
    for (let i = 0; i < temp[1]; i++) {
        for (let j = 0; j < temp[0]; j++) {
            str += "X";
        }
        str += "\n";
    }
    answer.push(str.trim());
});
console.log(answer.join("\n\n"))