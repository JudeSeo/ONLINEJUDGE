// 2022-12-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == 0)
        return;
    let temp = v.split("")
    let width = temp.length + 1;
    temp.forEach(val => {
        if (val == '1')
            width += 2
        else if (val == '0')
            width += 4;
        else
            width += 3;
    })
    answer.push(width)
})
console.log(answer.join("\n"))