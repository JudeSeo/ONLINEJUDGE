// 2021-12-07
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
const total = input[0];
for (let i = 1; i <= total; i++) {
    let sum = 0;
    let newInput = input[i].split(" ");
    let overAvg = 0;
    let num = Number(newInput[0]);
    for (let j = 1; j <= num; j++) {
        sum += Number(newInput[j]);
    }
    let avg = sum / num;
    for (let j = 1; j <= num; j++) {
        if (avg < newInput[j]) {
            overAvg++;
        }
    }
    let answer = ((overAvg / num) * 100).toFixed(3)
    console.log(`${answer}%`)
}
//네이버 블로그 참조..ㅠㅜ