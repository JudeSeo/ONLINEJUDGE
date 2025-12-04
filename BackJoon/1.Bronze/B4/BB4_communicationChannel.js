// 2022-08-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ")
    if (temp[0] == temp[1])
        answer.push("OK");
    else
        answer.push("ERROR")
})
console.log(answer.join("\n"));