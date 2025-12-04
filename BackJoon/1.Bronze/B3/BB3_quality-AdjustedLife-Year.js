// 2022-08-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')
let answer = 0;
input = input.slice(1)
input.forEach(v => {
    let temp = v.split(" ").map(v => Number(v))
    answer += (temp[0] * temp[1])
});
console.log(answer.toFixed(3));
