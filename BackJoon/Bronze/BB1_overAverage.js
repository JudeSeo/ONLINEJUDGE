// 2021-12-07
var fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// var input = fs.readFileSync('예제.txt').toString().trim().split('\n');
const total = input[0];
for (var i = 1; i <= total; i++) {
    var sum = 0;
    var newInput = input[i].split(" ");
    var overAvg = 0;
    var num = Number(newInput[0]);
    for (var j = 1; j <= num; j++) {
        sum += Number(newInput[j]);
    }
    var avg = sum / num;
    for (var j = 1; j <= num; j++) {
        if (avg < newInput[j]) {
            overAvg++;
        }
    }
    var answer = ((overAvg / num) * 100).toFixed(3)
    console.log(`${answer}%`)
}
//네이버 블로그 참조..ㅠㅜ