// 2022-02-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input.sort((a, b) => (a - b))
let sum = 0;
input.forEach((v, i) => {
    sum += parseInt(v);
});
let flag = true;
input.forEach((v, index) => {
    for (let i = 0; i < input.length; i++) {
        if (flag) {
            let temp = parseInt(v) + parseInt(input[i]);
            if (temp == (sum - 100)) {
                if (i > index) {
                    input.splice(i, 1);
                    input.splice(index, 1);
                } else {
                    input.splice(index, 1);
                    input.splice(i, (i + 1));
                }
                flag = false;
            }
        }
    }
});
console.log(input.join("\n"));