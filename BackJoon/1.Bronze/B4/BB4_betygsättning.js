// 2022-07-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let standard = input[0].split(" ").map(v => Number(v));
let score = input[1].split(" ").map(v => Number(v));
let answer = "E"
if (score[2] >= standard[2]) {
    if (score[1] >= standard[1]) {
        if (score[0] >= standard[0])
            answer = "A";
        else if (score[0] >= standard[0] / 2)
            answer = "B";
        else
            answer = "C";
    } else if (score[1] >= standard[1] / 2)
        answer = "D";
}
console.log(answer);
