// 2025-12-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split("");
let sum = 0;
let answer = 0;
input.forEach((v, i) => {
    if (v == "*") {
        answer = i + 1;
    } else {
        if ((i + 1) % 2 == 0) {
            sum += Number(v * 3);
        } else {
            sum += Number(v);
        }
    }
})
if (answer % 2 == 0) {
    let temp = 10 - (sum % 10);
    while (temp % 3 != 0) {
        temp += 10;
    }
    answer = temp / 3;

} else {
    answer = 10 - (sum % 10);
}

console.log(answer == 10 ? 0 : answer);
