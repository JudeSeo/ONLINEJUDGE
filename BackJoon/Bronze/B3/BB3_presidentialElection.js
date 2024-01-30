// 2022-12-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
input = input.slice(1);
let a = 0, b = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    a += temp[1]
    b += temp[2]
    if (temp[1] > temp[2])
        a += temp[0]
    else if (temp[1] < temp[2])
        b += temp[0]

})
if (a > b) answer = 1;
else if (a < b) answer = 2;
console.log(answer)