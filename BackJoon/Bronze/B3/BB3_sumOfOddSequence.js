// 2023-02-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
input.forEach(v => {
    let sum = 0;
    if (v % 2 == 1) {
        for (let i = 1; i <= v; i++) {
            if (i % 2 == 1)
                sum += i;
        }
    }
    console.log(sum);
})
