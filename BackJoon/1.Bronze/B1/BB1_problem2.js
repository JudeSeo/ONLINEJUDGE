// 2025-03-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
let arr = {};
input.splice(0, num).map(v => {
    let temp = v.split(" ");
    arr[temp[0]] = temp[1];
});
let answer = []
input.slice(1).forEach(v => {
    if (arr[v] != undefined) answer.push(arr[v])
    else answer.push(v);
})
console.log(answer.join(""));
