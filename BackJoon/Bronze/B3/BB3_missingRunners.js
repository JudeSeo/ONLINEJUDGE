// 2023-09-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = Number(input.splice(0, 1)[0]);
let arr = Array.from(new Array(num), (x, i) => i + 1);
input[0].split(" ").map(v => Number(v)).forEach(v => {
    if (arr.includes(v)) arr.splice(arr.indexOf(v), 1)
});
console.log(arr[0]);