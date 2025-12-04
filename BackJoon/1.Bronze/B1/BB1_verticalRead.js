// 2022-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach((v, index) => {
    for (let i = 0; i < v.length; i++) {
        answer[5 * i + index] = v[i];
    }
})

console.log(answer.join(""));
