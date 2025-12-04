// 2022-02-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let up = parseInt(input[0].split(" ")[0]);
let down = parseInt(input[0].split(" ")[1]);
let dist = up - down
let top = parseInt(input[0].split(" ")[2]);
let answer = Math.ceil((top - down)/dist);
console.log(answer);

// 걍 while문 썻다가 시간초과...
// 네이버 검색 후 수학적으로 풀었다..