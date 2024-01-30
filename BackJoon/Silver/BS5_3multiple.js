// 2022-02-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input[0];
let answer = [];
let cnt = 0;
while (parseInt(input) >= 10) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += parseInt(input[i]);
    }
    input = sum.toString();
    cnt++;
}
answer.push(cnt);
if (input == 3 || input == 6 || input == 9)
    answer.push("YES");
else
    answer.push("NO")
console.log(answer.join("\n"));