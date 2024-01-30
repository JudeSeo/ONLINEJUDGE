// 2022-04-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [0, 1];
for (let i = 2; i <= input; i++) {
    answer[i] = ((BigInt(answer[i - 1]) + BigInt(answer[i - 2])) % 1000000n);
}
console.log(answer[input].toString());

// 메모리초과....