// 2022-09-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let [x, y] = input[1].split(" ").map(v => Number(v));
input = input.slice(2);
if (input.length === 1)
    answer = 0;
else {
    input.forEach(v => {
        let temp = v.split(" ").map(val => Number(val))
        answer += (Math.abs(x - temp[0]) + Math.abs(y - temp[1]))
        x = temp[0];
        y = temp[1];
    })
}
console.log(answer);