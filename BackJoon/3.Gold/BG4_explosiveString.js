// 2024-05-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let str = input[0].split("");
let exp = input[1].split("");
let answer = []
for (let i = 0; i < input[0].length; i++) {
    answer.push(str[i]);
    if (answer.length >= exp.length) {
        let flag = true;
        for (let j = 0; j < exp.length; j++) {
            if (answer[answer.length - exp.length + j] != exp[j]) {
                flag = false;
                break;
            }
        }
        if (flag) answer.splice(answer.length - exp.length);
    }
}
console.log(answer.length == 0 ? "FRULA" : answer.join(""));
