// 2023-05-17
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
    input = input.slice(1);
    input.forEach(v => {
        let temp = v.split(" ").map(val => BigInt(val))
        if (temp[0] > temp[2] && temp[1] > temp[3])
            answer.push("TelecomParisTech");
        else if (temp[0] < temp[2] && temp[1] < temp[3])
            answer.push("Eurecom");
        else {
            let tel = temp[0] * temp[1];
            let eur = temp[2] * temp[3];
            if (tel > eur)
                answer.push("TelecomParisTech");
            else if (tel < eur)
                answer.push("Eurecom");
            else
                answer.push("Tie")
        }
    })
    console.log(answer.join("\n"))
}