// 2022-02-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
let stack = [];
input.forEach((v, i) => {
    switch (v.split(" ")[0]) {
        case "push":
            stack.push(v.split(" ")[1]);
            break;
        case "front":
            answer.push(stack.length === 0 ? -1 : stack[0]);
            break;
        case "back":
            answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
            break;
        case "size":
            answer.push(stack.length);
            break;
        case "empty":
            answer.push(stack.length === 0 ? 1 : 0);
            break;
        case "pop":
            answer.push(stack.length === 0 ? -1 : stack.shift());
            break;
    }
})

console.log(answer.join("\n"));