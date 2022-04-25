// 2022-04-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
let testNum = input[0];
input = input.slice(1);
for (let i = 1; i < 15; i++) {
    let temp = new Array(14).fill(0);
    for (let j = 1; j < 15; j++) {
        for (let k = 0; k < j; k++) {
            temp[j - 1] += answer[i - 1][k];
        }
    }
    answer.push(temp);
}
for (let i = 0; i < testNum; i++) {
    let floor = input[i*2]
    let ho = input[i*2+1]-1;
    console.log(answer[floor][ho]);
}