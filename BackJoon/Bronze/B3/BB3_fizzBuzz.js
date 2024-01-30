// 2023-04-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = [];
for (let i = 1; i <=input[2] ; i++) {
    if(i%input[0] == 0 && i%input[1] == 0)
        answer.push("FizzBuzz");
    else if(i%input[0] == 0)
        answer.push("Fizz");
    else if(i%input[1] == 0)
        answer.push("Buzz");
    else
        answer.push(i)
}
console.log(answer.join("\n"));
