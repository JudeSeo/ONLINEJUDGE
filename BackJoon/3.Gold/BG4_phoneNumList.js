// 2022-02-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let num = input[0];
input = input.slice(1);
for (let i = 0; i < num; i++) {
    let temp = input.slice(1, parseInt(input[i]) + 1);
    input = input.slice(parseInt(input[i]) + 1);
    let cnt = 0;
    temp.forEach((v, index) => {
        for (let j = index + 1; j < temp.length; j++) {
            if (temp[j].indexOf(v) >= 0) {
                cnt++;
                break;
            }
        }
    });
    cnt == 0 ? answer.push("YES") : answer.push("NO")
}
console.log(answer.join("\n"));

// 시간초과