// 2022-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1)[0].split(" ");
let temp = Array.from(new Set(input)).sort((a, b) => (a-b));
let answer = [];
let object = {};

temp.forEach((v, i) => (object[v]=i));
for(let i=0;i<input.length;i++)
    answer.push(object[input[i]]);

// input.forEach((value, index)=>{
//     answer[index] = temp.filter((v) => (
//         v < value)).length})
// 뭔 차이로 메모리초과가 뜨는지 모르겠다..

console.log(answer.join(" "));