// 2022-01-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1)[0].split(" ");
let answer = 0;
let primeChk = [0, 0];
input.forEach((v, i) => {
    v = parseInt(v);
    if (v == 2)
        primeChk[2] = 2;
    for (let i = 2; i < v; i++) {
        if (v % i == 0) {
            primeChk[v] = 0;
            break;
        } else
            primeChk[v] = v;
    }
});
primeChk.forEach(value => {
    if (value > 0)
        answer++;
});
console.log(answer);