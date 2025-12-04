// 2023-03-30
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
    input = input.slice(1).map(v => Number(v));
    if (input.length == input[input.length - 1]) console.log('good job');
    else {
        let answer = [];
        for (let i = 1; i <= input[input.length - 1]; i++) {
            if (!input.includes(i)) answer.push(i)
        }
        console.log(answer.join("\n"))
    }
}
