// 2023-11-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
input.forEach((v, i) => {
    let temp = v.split("");
    temp.forEach((val, index) => {
        if (i % 2 == 0) {
            if (index % 2 == 0) {
                if (val == "F") answer++;
            }
        } else {
            if (index % 2 == 1) {
                if (val == "F") answer++;
            }
        }
    })
})
console.log(answer);