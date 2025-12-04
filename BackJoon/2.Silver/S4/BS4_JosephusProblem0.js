// 2022-04-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v=>Number(v));
let answer = [];
let n = input[0];
let k = input[1];
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
let index = k - 1;
for (let i = 0; i < n; i++) {
    if (index > arr.length-1)
        index %= arr.length;
    answer.push(arr[index]);
    arr.splice(index, 1);
    index += (k - 1);
}

console.log("<" + answer.join(", ") + ">");