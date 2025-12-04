// 2023-03-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let index = 0;
while (input.length > 0) {
    index++;
    let num = input.splice(0, 1)[0];
    let temp = input.splice(0, 1)[0].split("");
    temp.forEach(v => {
        if (v == "c") num++;
        else num--;
    })
    answer.push(`Data Set ${index}:\n${num}`);
}
console.log(answer.join("\n\n"))