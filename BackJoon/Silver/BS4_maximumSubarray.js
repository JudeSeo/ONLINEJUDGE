// 2024-06-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let temp = input.splice(0, 2)[1].split(" ").map(v => Number(v));
    let arr = [];
    for (let i = 0; i < temp.length; i++) {
        arr.push(temp[i]);
        for (let j = i + 1; j < temp.length; j++) {
            arr.push(arr[arr.length - 1]+ temp[j]);
        }
    }
    answer.push(Math.max(...arr));
}
console.log(answer.join("\n"));
