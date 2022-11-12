// 2022-11-06 => 2022-11-12
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on("line", function (line) {
    input=line
    rl.close();
}).on("close", function () {
    solution(input);
    process.exit();
});
const solution = (input) => {
    let answer = [];
    for (let i = 0; i < 5; i++) {
        let temp = "";
        if (i==4) {
            for (let j = 0; j < input; j++) {
                for (let k = 0; k < 5 * input; k++) {
                    temp += "@";
                }
                temp += "\n";
            }
        } else {
            for (let j = 0; j < input; j++) {
                for (let k = 0; k < input; k++) {
                    temp += "@";
                }
                temp += "\n";
            }
        }
        answer.push(temp)
    }
    console.log(answer.join(""))
}