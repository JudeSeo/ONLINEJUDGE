// 2022-11-26
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
        let [i, num] = v.split(" ").map(val => Number(val));
        let temp = [i];
        for (let k = 0; k < 3; k++) {
            let sum = 0;
            for (let j = 1; j <= num; j++) {
                if (k == 0) {
                    sum += j;
                } else if (k == 1) {
                    sum += (2 * j - 1)
                } else {
                    sum += (2 * j)
                }
            }
            temp.push(sum);
        }
        answer.push(temp.join(" "))
    })
    console.log(answer.join("\n"));
}
