// 2022-10-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
input.forEach(v => {
    if (v == 0)
        return;
    else {
        if (v <= 1000000)
            answer.push(v);
        else if (v <= 5000000)
            answer.push(v * 0.9);
        else
            answer.push(v * 0.8)
    }
})
console.log(answer.join("\n"))