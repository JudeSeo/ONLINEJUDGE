// 2023-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = 0;
let list = {
    Paper: 57.99,
    Printer: 120.50,
    Planners: 31.25,
    Binders: 22.50,
    Calendar: 10.95,
    Notebooks: 11.20,
    Ink: 66.95,
}
input.forEach(v => {
    if (v == "EOI") return;
    answer += list[v];
})
console.log(`$${answer.toFixed(2)}`);
