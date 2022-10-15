// 2022-10-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v))[0];
var input = fs.readFileSync('../../../예제.txt').toString().trim().split('\r\n').map(v => Number(v))[0];
let answer = [];
for (let i = 0; i < input; i++) {
    let temp = "";
    for (let j = 0; j < input; j++) {
        if (i % 2 == 0)
            temp += "* "
        else
            temp += " *"
    }
    answer.push(temp)
}
console.log(answer.join("\n"));