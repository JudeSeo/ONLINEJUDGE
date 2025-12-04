// 2022-04-26
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = [];
let primeChk = [0, 0, 2, 3];
for (let i = 2; i <= input[1]; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i != j && i % j == 0) {
            primeChk[i] = 0;
            break;
        } else
            primeChk[i] = i;
    }
}
for (let i = input[0]; i <= input[1]; i++) {
    if (primeChk[i] > 0)
        answer.push(primeChk[i]);
}
console.log(answer.join("\n"));