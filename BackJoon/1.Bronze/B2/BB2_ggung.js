// 2024-03-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    if (v.indexOf("Simon says") > -1) {
        answer.push(v.replace("Simon says", ""));
    }
})
console.log(answer.join("\n"));