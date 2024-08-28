// 2024-08-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [n, x] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let maxFrom = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] + temp[1] <= x) {
        if (temp[0] > maxFrom) {
            maxFrom = temp[0];
        }
    }
})
if (maxFrom == 0) console.log(-1);
else console.log(maxFrom);