// 2022-03-30
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ");
    temp.sort((a, b) => (a - b));
    if (temp[2] != '0') {
        if (Math.pow(temp[2], 2) == Math.pow(temp[0], 2) + Math.pow(temp[1], 2))
            answer.push("right");
        else
            answer.push("wrong");
    }
});
console.log(answer.join("\n"));