// 2023-02-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = []
while (input.length > 1) {
    let y = 0, k = 0;
    let temp = input.splice(0, 9)
    temp.forEach(v => {
        let score = v.split(" ").map(val => Number(val));
        y += score[0];
        k += score[1];
    })
    answer.push(y > k ? "Yonsei" : y < k ? "Korea" : "Draw");
}
console.log(answer.join("\n"));
