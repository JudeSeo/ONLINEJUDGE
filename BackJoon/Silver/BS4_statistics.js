// 2022-01-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
input.sort((a, b) => {
    return a - b;
});
let mid, mode, range, sum = 0;
mid = input[(input.length / 2) - 0.5];
range = input[input.length - 1] - input[0];
input.forEach((v, i) => {
    sum += parseInt(v);
});
const counts = input.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
}, {});
const keys = Object.keys(counts);
mode = keys[0];
cnt = 0;
keys.forEach((val, idx) => {
    if (counts[val] > counts[mode]) {
        mode = val;
    }
});
let temp = [parseInt(mode)];
keys.forEach((val, idx) => {
    if (counts[mode] == counts[val])
        temp.push(parseInt(val));
});
temp.sort((a, b) => {
    return a-b;
});
let set = new Set(temp);
temp = Array.from(set)
if (temp.length > 1) {
    mode = temp[1];
}
let answer = [Math.round(sum / input.length), mid, mode, range];
console.log(answer.join("\n"));


//맞긴했지만 소스 진짜 너무 더럽다....