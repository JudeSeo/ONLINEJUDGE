// 2022-09-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let [num, val] = v.split(" ");
    let temp = "";
    for (let i = 0; i < num; i++) {
        temp += val;
    }
    answer.push(temp)
})
console.log(answer.join("\n"));
