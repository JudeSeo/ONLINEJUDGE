// 2022-01-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');
let first = Math.floor(input[0]);
let n = 1;
let benefit = Math.floor(input[2]) - Math.floor(input[1]);
if (benefit <= 0)
    n = -1;
else
    n = Math.floor(first / benefit) + 1;
console.log(n)

// 테스트는 잘 되서 제출했는데... 안되서 네이버 보고 했다....
// parseInt 쓰면 음수에서 문제생겨서 Math.floor 쓰라는 네이버 글을 봤다..
// 두가지의 구분이 필요하다