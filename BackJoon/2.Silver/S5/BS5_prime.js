// 2022-05-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let from = Number(input[0]);
let to = Number(input[1]);
let answer = [];
let primeChk = [0, 0];
for (let i = from; i <= to; i++) {
    if (i == 2)
        primeChk[2] = 2;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            primeChk[i] = 0;
            break;
        } else
            primeChk[i] = i;
    }
}
;
primeChk.forEach(value => {
    if (value > 0)
        answer.push(value);
});
if (answer.length != 0) {
    let sum = answer.reduce((a, b) => a + b)
    console.log(sum + "\n" + answer[0]);
} else
    console.log(-1)
