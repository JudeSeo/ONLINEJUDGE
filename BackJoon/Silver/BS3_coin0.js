// 2022-04-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let money = parseInt(input[0].split(" ")[1]);
input = input.slice(1);
input.reverse();
input.forEach((v, i) => {
    if (v <= money) {
        answer += parseInt(money / v)
        money %= v;
    }
})

console.log(answer);