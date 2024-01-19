// 2024-01-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let arr = [];
for (let i = 1; i <= input; i++) arr.push(i);
while (arr.length > 1) {
    let temp = [];
    arr.forEach((v, i) => {
        if (i % 2 == 1) temp.push(v);
    })
    arr = temp;
}
console.log(arr[0]);