// 2023-11-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let num = 1;
    let temp = v.split(" ")
    for (let i = 0; i < temp[1]; i++) {
        num *= temp[0];
        num %= 10;
    }
    if (num == 0) answer.push(10);
    else answer.push(num);
})
console.log(answer.join("\n"));

// 틀린줄 알고 다른걸로 풀고 있었는데 맞았네..
// 아래꺼도 맞았음

// var fs = require('fs');
// // let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
// var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
// let ex = [[0], [1], [2, 4, 8, 6], [3, 9, 7, 1], [4, 6], [5], [6], [7, 9, 3, 1], [8, 4, 2, 6], [9, 1]];
// let answer = [];
// input.forEach(v => {
//     let temp = v.split(" ");
//     let first = (temp[0] % 10)
//     let second = temp[1] % ex[first].length - 1;
//     if (second < 0) second = ex[first].length - 1
//     let num = ex[first][second]
//     if (num == 0) answer.push(10);
//     if (num == 0) answer.push(10);
//     else answer.push(num);
// })
// console.log(answer.join("\n"));