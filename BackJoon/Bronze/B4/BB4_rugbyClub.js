// 2022-08-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let temp = v.split(" ")
    if (temp[0] == "#")
        return
    if (temp[1] > 17 || temp[2] >= 80)
        answer.push(`${temp[0]} Senior`);
    else
        answer.push(`${temp[0]} Junior`)
})
console.log(answer.join("\n"));