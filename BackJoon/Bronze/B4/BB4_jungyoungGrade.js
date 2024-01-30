// 2023-11-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [stu, num] = input[0].split(" ").map(v => Number(v));
input = input[1].split(" ").map(v => Number(v));
input.forEach(v => {
    let score = Math.floor(v * 100 / stu);
    switch (true) {
        case score >= 0 && score <= 4:
            answer.push(1);
            break;
        case score > 4 && score <= 11:
            answer.push(2);
            break;
        case score > 11 && score <= 23:
            answer.push(3);
            break;
        case score > 23 && score <= 40:
            answer.push(4);
            break;
        case score > 40 && score <= 60:
            answer.push(5);
            break;
        case score > 60 && score <= 77:
            answer.push(6);
            break;
        case score > 77 && score <= 89:
            answer.push(7);
            break;
        case score > 89 && score <= 96:
            answer.push(8);
            break;
        case score > 96 && score <= 100:
            answer.push(9);
            break;
    }
})
console.log(answer.join(" "));