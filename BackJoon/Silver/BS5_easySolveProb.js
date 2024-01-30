// 2022-05-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let start = input.split(" ")[0];
let end = input.split(" ")[1];
let answer = 0;
let arr = []
for (let i = 1; i <= end; i++) {
    for (let j = 1; j <= i; j++) {
        arr.push(i);
    }
}
for (let i = start - 1; i < end; i++) {
    answer += arr[i]
}

console.log(answer)