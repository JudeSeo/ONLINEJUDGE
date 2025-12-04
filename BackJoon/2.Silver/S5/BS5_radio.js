// 2022-04-21
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let from = Number(input[0].split(" ")[0])
let to = Number(input[0].split(" ")[1]);
input = input.slice(2).map(v=>Number(v));
let temp = [Math.abs(from - to)];
input.forEach(v => temp.push((Math.abs(v - to)) + 1) );
console.log(Math.min(...temp));

// 2번째줄이 주어지는 버튼 N의 개수인데 2번째 줄까지 포함해서 풀려고 해서 틀렸었음