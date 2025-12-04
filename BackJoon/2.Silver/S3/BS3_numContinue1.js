// 2022-03-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
for (let i = 0; i < input.length - 1; i++) {
    answer += 9 * (10 ** i) * (i + 1);
}
answer += (Number(input) - 1 * (10 ** (input.length - 1)) + 1) * input.length;
console.log(answer);

// 어렵....


// map으로 풀었더니 메모리 초과...
// let answer = new Array(Number(input)).fill().map((v, i) => i + 1);
// console.log(answer.join("").length);