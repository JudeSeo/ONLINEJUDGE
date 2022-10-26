// 2022-10-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let a = 0;
let b = 0;
input = input.slice(1)
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] > temp[1])
        a += (temp[0] + temp[1])
    else if (temp[0] < temp[1])
        b += (temp[0] + temp[1])
    else {
        a += temp[0]
        b += temp[1]
    }
})
console.log(a, b)