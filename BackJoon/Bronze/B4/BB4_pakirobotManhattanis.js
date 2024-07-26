// 2024-07-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split("");
let up = 0;
let side = 0;
input.forEach(v => {
    switch (v) {
        case "N":
            up++;
            break;
        case "S":
            up--;
            break;
        case "E":
            side++;
            break;
        case "W":
            side--;
            break;
    }
})
let answer = Math.abs(up) + Math.abs(side);
console.log(answer);