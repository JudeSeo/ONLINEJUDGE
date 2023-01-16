// 2023-01-16
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
    let answer = [];
    input.slice(1).forEach(v => {
        let alph = []
        let sum = 2015;
        let temp = v.split("")
        temp.forEach(val => {
            if (alph.indexOf(val) == -1) {
                alph.push(val)
                sum -= val.charCodeAt(0)
            }
        })
        answer.push(sum);
    })
    console.log(answer.join("\n"))
};