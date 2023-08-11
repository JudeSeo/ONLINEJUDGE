// 2023-08-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = new Array(9);
const heart = [
    ` @@@   @@@  `,
    `@   @ @   @ `,
    `@    @    @ `,
    `@         @ `,
    ` @       @  `,
    `  @     @   `,
    `   @   @    `,
    `    @ @     `,
    `     @      `,
]
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < input; j++) {
        if (answer[i] == undefined)
            answer[i] = heart[i];
        else
            answer[i] += heart[i]
    }
}
console.log(answer.join("\n"))