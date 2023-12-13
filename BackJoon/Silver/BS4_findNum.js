// 2023-12-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let a = input[1].split(" ").map(v => Number(v)).sort((a, b) => a - b);
let list = input[3].split(" ");
list.forEach(v => {
    let l = 0;
    let r = a.length;
    let flag = false;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (a[mid] == v) {
            flag = true;
            break;
        } else if (a[mid] < v) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    if (flag) answer.push(1);
    else answer.push(0)
})
console.log(answer.join("\n"));
