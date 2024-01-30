// 2022-06-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = input[0] + input[1]
while(answer > 12){
    answer -= 12
}
console.log(answer);
