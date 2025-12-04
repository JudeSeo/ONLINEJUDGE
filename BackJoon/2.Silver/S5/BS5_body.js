// 2022-04-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
for (let i = 0; i < input.length; i++) {
    let grade = 1;
    let [aTall, aWeight] = input[i].split(" ").map(v => Number(v));
    for (let j = 0; j < input.length; j++) {
        let [bTall, bWeight] = input[j].split(" ").map(v => Number(v));
        if (i !== j) {
            if (aTall < bTall && aWeight < bWeight)
                grade++;
        }
    }
    answer.push(grade);
}
console.log(answer.join(" "));