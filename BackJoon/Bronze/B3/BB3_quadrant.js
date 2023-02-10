// 2023-02-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let q1 = 0, q2 = 0, q3 = 0, q4 = 0, axis = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] == 0 || temp[1] == 0) axis++;
    else if (temp[0] > 0 && temp[1] > 0) q1++;
    else if (temp[0] < 0 && temp[1] > 0) q2++;
    else if (temp[0] < 0 && temp[1] < 0) q3++;
    else if (temp[0] > 0 && temp[1] < 0) q4++;
})
console.log(`Q1: ${q1}
Q2: ${q2}
Q3: ${q3}
Q4: ${q4}
AXIS: ${axis}`)
