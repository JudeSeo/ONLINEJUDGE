// 2023-01-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
input.forEach(v => {
    let temp = "";
    for (let i = 0; i < v; i++) {
        for (let j = 0; j < v; j++) {
            if (i == 0)
                temp += "#";
            else if (i == v - 1)
                temp += "#";
            else {
                if (j == 0)
                    temp += "#";
                else if (j == v - 1)
                    temp += "#";
                else
                    temp += "J";
            }
        }
        temp += "\n";
    }
    answer.push(temp)
})
console.log(answer.join("\n"))