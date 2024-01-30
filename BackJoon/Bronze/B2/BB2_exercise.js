// 2023-11-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
let heart = input[1];
if (input[2] - input[1] < input[3]) answer = -1;
else {
    while (input[0] > 0) {
        if (heart + input[3] <= input[2]) {
            heart += input[3];
            answer++;
            input[0]--;
        } else {
            heart = Math.max(heart - input[4], input[1]);
            answer++;
        }
    }
}
console.log(answer);