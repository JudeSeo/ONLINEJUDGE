// 2023-12-22
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    solution(input);
    process.exit;
});

function solution(input) {
    input = input.slice(1);
    let answer = [];
    input.forEach(v => {
        let temp = v.split(" ");
        let num = Number((Number(temp[0].split("").reverse().join("")) + Number(temp[1].split("").reverse().join(""))).toString().split("").reverse().join(""));
        answer.push(num);
    })
    console.log(answer.join("\n"));
}

// fs로는 EACCES 에러 발생으로 인해 readline으로 풂.
