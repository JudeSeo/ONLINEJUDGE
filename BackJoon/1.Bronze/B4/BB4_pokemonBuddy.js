// 2023-07-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[1] >= temp[2]) answer.push(0);
    else {
        switch (temp[0]) {
            case 1:
                answer.push(temp[2] - temp[1])
                break;
            case 2:
                answer.push((temp[2] - temp[1]) * 3)
                break;
            case 3:
                answer.push((temp[2] - temp[1]) * 5)
                break;
        }
    }
})
console.log(answer.join("\n"));