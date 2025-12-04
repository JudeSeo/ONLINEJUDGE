// 2023-04-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ");
    switch (temp[1]) {
        case "*":
            answer.push((temp[0] * temp[2]) ** 2);
            break;
        case "/":
            if (temp[0] % 2 == 0) answer.push(temp[0] / 2);
            else answer.push((BigInt(temp[0]) + 1n) / 2n);
            break;
        case "+":
            answer.push((BigInt(temp[0]) + BigInt(temp[2])) - (answer[i - 1] == undefined ? 1n : BigInt(answer[i - 1])));
            break;
        case "-":
            answer.push((BigInt(temp[0]) - BigInt(temp[2])) * (answer[i - 1] == undefined ? 1n : BigInt(answer[i - 1])));
            break;

    }
})
console.log(answer.join("\n"))