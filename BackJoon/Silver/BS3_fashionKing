var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
while (input.length) {
    let arr = {};
    let temp = input.slice(1, Number(input[0]) + 1);
    input = input.slice(Number(input[0]) + 1);
    temp.forEach((v, i) => {
        let [name, kind] = v.split(" ");
        arr[kind] == undefined ? arr[kind] = 1 : arr[kind] += 1;
    });
    arr = Object.entries(arr);
    let sum = 1;
    arr.forEach((v, i) => {
        sum *= (v[1] + 1)
    })
    answer.push(sum-1);
}

console.log(answer.join("\n"));
