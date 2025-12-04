// 2024-02-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = "";
const ganzi = [ 'I', 'J', 'K', 'L', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
answer += ganzi[(input) % 12];
let gan = (input % 10) + 6;
answer += gan >= 10 ? gan - 10 : gan;
console.log(answer);
