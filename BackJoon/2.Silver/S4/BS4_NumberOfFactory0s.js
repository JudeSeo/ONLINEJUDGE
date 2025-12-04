// 2022-04-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
input = BigInt(input)
let answer = 1n;
while (input > 0) {
    answer *= input;
    input--;
}
answer = answer.toString().split("").map(v => (Number(v))).reverse();
let ans = 0;
for (let i = 0; i < answer.length; i++) {
    if(answer[i] !== 0){
        ans = i;
        break;
    }
}
console.log(ans);