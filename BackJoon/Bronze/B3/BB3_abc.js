// 2023-01-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let abc = input[1].split("");
let num = input[0].split(" ").map(v => Number(v)).sort((a, b) => a - b);
abc.forEach(v => {
    if (v == "A")
        answer.push(num[0]);
    else if (v == "B")
        answer.push(num[1]);
    else if (v == "C")
        answer.push(num[2]);
})
console.log(answer.join(" "))