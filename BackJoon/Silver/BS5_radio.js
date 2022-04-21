// 2022-04-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let from = parseInt(input[0].split(" ")[0])
let to = parseInt(input[0].split(" ")[1]);
let answer = Math.abs(from - to);
input = input.slice(1);
let temp = [];
input.forEach((v, i) => {
    temp.push(Math.abs(v - to));
});

if (Math.min(...temp) + 1 < answer)
    answer = Math.min(...temp) + 1;

console.log(answer);

// 맞는거 같은데.... 계속 틀렸다고 나온다... 예외가 뭔지 찾아봐야할듯..