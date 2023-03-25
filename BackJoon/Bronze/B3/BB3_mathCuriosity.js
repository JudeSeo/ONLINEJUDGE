// 2023-03-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let num = 0;
    for (let i = 1; i < temp[0]; i++) {
        for (let j = i + 1; j < temp[0]; j++) {
            if (parseInt((i ** 2 + j ** 2 + temp[1]) / (i * j)) == (i ** 2 + j ** 2 + temp[1]) / (i * j))
                num++;
        }
    }
    answer.push(num);
})
console.log(answer.join("\n"))