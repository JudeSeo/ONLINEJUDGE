// 2022-03-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let nums = input[1].split(" ");
input = input.slice(2);
input.forEach((v, index) => {
    let temp = v.split(" ");
    let sums = 0;
    let i = parseInt(temp[0]) - 1
    while (i < parseInt(temp[1])) {
        sums += parseInt(nums[i])
        i++;
    }
    answer.push(sums);
});
console.log(answer.join("\n"));

// 시간초과 나온다....

// -> // 자바로 풀었음
