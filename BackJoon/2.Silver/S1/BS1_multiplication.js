// 2024-05-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>BigInt(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => BigInt(v));

const pow = (num) => {
    if (num == 1n) return input[0] % input[2];
    const half = pow(num / 2n) % input[2];
    if (num % 2n) return (half * half * (input[0] % input[2])) % input[2];
    return (half * half) % input[2];
}

let answer = pow(input[1]);
console.log(answer.toString());

// 재귀 쓰라고 하는데..... 어렵.... 잘 모르겠다...
