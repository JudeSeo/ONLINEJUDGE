// 2022-03-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let kth = input[0].split(" ")[1];
let nums = input[1].split(" ");
nums.sort((a, b) => (a - b))
console.log(nums[kth - 1]);

// 시간초과 떴다...
// 이렇게 푸는게 맞는거 같은데..ㅜ