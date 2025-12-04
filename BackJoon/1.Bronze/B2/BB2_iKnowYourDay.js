// 2024-03-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0") return;
    let temp = v.split(" ");
    let tDate = new Date(temp[2], temp[1] - 1, temp[0]);
    let fDate = new Date(temp[2], 0, 1);
    answer.push(Math.floor((tDate.getTime() - fDate.getTime()) / 1000 / 60 / 60 / 24) + 1);
})
console.log(answer.join("\n"));
