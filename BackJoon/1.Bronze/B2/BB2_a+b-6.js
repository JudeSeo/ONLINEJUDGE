// 2022-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(",");
    answer.push(parseInt(temp[0]) + parseInt(temp[1]))
})
console.log(answer.join("\n"));
