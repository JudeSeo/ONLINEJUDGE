// 2024-02-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").sort((a, b) => a - b);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").sort((a, b) => a - b);
let answer = input[input.length - 1] - input[0];
console.log(answer);
// ========================================================
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input);
    process.exit();
});

const solution = (input) => {
    input = input[1].split(" ").sort((a, b) => a - b);
    let answer = input[input.length - 1] - input[0];
    console.log(answer);
}

// 위의 소스 EACCES 에러나서 아래 소스로 하니까 된다