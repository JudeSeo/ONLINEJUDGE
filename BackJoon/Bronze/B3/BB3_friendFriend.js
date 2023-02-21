// 2023-02-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let [people, mate] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let answer = {};
for (let i = 1; i <= people; i++) {
    answer[i] = 0;
}
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val))
    answer[temp[0]]++;
    answer[temp[1]]++;
})
console.log(Object.values(answer).join("\n"));
