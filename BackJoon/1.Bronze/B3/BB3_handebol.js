// 2022-11-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp.indexOf(0) == -1)
        answer++;
})
console.log(answer)