// 2023-06-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => a - b);
    if (temp[0] >= 10)
        answer.push(`${v}\ntriple-double`);
    else if (temp[1] >= 10)
        answer.push(`${v}\ndouble-double`);
    else if (temp[2] >= 10)
        answer.push(`${v}\ndouble`);
    else
        answer.push(`${v}\nzilch`);
})
console.log(answer.join("\n\n"))