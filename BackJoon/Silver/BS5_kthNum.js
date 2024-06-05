// 2024-06-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let [n, k] = input[0].split(" ");
let nums = input[1].split(" ").map(v => Number(v)).sort((a, b) => (a - b));
console.log(nums[k - 1]);

// 정렬 전 숫자 타입으로 바꿔주니까 통과했다...
