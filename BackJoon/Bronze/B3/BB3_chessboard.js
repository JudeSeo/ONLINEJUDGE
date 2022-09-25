// 2022-09-25
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on("line", function (line) {
    input.push(line.split(" "));
}).on("close", function () {
    solution(input);
    process.exit();
});
const solution = (input) => {
    let [hori, vert] = input[0];
    let answer = [];
    for (let i = 0; i < hori; i++) {
        let temp = ""
        for (let j = 0; j < vert; j++) {
            if ((i + j) % 2 == 0)
                temp += "*"
            else
                temp += ".";
        }
        answer.push(temp)
    }

    console.log(answer.join("\n"));
}

// 이것도 readline.... 
// 진짜 짜증