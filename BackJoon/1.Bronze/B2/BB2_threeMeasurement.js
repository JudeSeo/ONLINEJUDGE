// 2024-02-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [n, k, l] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let team = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] >= l && temp[1] >= l && temp[2] >= l) {
        if (temp[0] + temp[1] + temp[2] >= k) {
            team++;
            answer.push(...temp);
        }
    }

})
console.log(team);
console.log(answer.join(" "));