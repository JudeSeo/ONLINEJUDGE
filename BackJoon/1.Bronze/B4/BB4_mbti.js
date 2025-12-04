// 2022-10-20
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

function solution(input) {
    let j = input.splice(0, 1);
    input = input.slice(1);
    let answer = 0;
    input.forEach(v => {
        if (v == j)
            answer++;
    })
    console.log(answer)
}
