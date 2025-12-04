// 2023-02-08
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on("line", function (line) {
    input.push(line.split(' ').map(el => parseFloat(el)));
}).on("close", function () {
    solution(input);
    process.exit();
});
const solution = (input) => {
    let answer = [];
    input = input.slice(1)
    while (input.length > 1) {
        let num = input.splice(0, 1)[0][0];
        let score = input.splice(0, num).map(
            v => v = {...v}
        );
        let sum = 0, tot = 0;
        Object.values(score).forEach(v => {
            sum += v[0] * v[1];
            tot += Number(v[0]);
        })
        answer.push(tot + " " + (sum / tot).toFixed(1))
    }
    console.log(answer.join("\n"))
}


// readline 공백있는 값 받아서 쓰기 겁나 힘들다....