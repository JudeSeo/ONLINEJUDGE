// 2023-08-18
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input[1].split(" ").map(v => Number(v)));
    process.exit();
});
const solution = (input) => {
    let answer = [];
    input.forEach(v => {
        switch (true) {
            case v >= 300:
                answer.push("1");
                break;
            case v >= 275:
                answer.push("2");
                break;
            case v >= 250:
                answer.push("3");
                break;
            case v < 250:
                answer.push("4");
                break;
        }
    })
    console.log(answer.join(" "));
}