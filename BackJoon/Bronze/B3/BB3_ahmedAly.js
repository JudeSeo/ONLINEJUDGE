// 2023-04-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ");
    let result = 0;
    switch (temp[1]) {
        case "+":
            result = Number(temp[0]) + Number(temp[2]);
            break;
        case "-":
            result = Number(temp[0]) - Number(temp[2]);
            break;
    }
    if (result == temp[4]) answer.push(`Case ${i + 1}: YES`)
    else answer.push(`Case ${i + 1}: NO`)
})
console.log(answer.join("\n"));
