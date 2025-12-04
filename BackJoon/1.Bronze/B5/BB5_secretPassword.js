// 2022-07-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
input.forEach(v => {
    if (v.length >= 6 && v.length <= 9)
        answer.push("yes");
    else
        answer.push("no");
})
console.log(answer.join("\n"));
