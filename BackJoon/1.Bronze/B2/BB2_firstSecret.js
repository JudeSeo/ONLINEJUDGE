// 2022-03-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    if (i == input.length - 1)
        return;
    let str = v.split("");
    str.reverse();
    answer.push(...str);
    answer.push("\n")
})
console.log(answer.join(""));