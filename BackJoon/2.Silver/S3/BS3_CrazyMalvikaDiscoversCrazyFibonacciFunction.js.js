// 2024-06-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let arr = [temp[0], temp[1]];
    for (let i = 2; i < 6; i++) {
        arr[i] = arr[i - 1] - arr[i - 2];
    }
    let num = (temp[2] - 1)%6;
    while(arr[num]<0){
        arr[num] += (10**9+7);
    }
    answer.push(arr[num] % 1000000007);
})
console.log(answer.join("\n"));
