// 2022-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let length = input[0];
input = input.slice(1)
let answer = [];
input.forEach((v, i) => {
    v = v.split(" ");
    let string = "";
    for (let i = 0; i < v[1].length; i++) {
        for (let j = 0; j < v[0]; j++) {
            string += v[1].charAt(i);
        }
    }
    answer.push(string)
})

console.log(answer.join("\n"));