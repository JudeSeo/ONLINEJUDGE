// 2022-06-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = "Naver Whale";
if(input == "N" || input == "n")
    answer = "Naver D2";
console.log(answer);
