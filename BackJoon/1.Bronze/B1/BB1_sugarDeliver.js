// 2022-04-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
while (input >= 3) {
    if (input % 5 == 0) {
        answer += input / 5;
        input = 0;
    } else {
        input -= 3;
        answer++;
    }
}
if (input != 0)
    answer = -1;

console.log(answer); 