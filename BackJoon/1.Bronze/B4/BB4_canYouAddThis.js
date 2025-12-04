// 2022-07-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
  let temp = v.split(" ").map(value => Number(value));;
  answer.push(temp[0] + temp[1])
})
console.log(answer.join("\n"));
