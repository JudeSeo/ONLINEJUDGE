// 2022-05-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let nums = Number(input[0].split(" ")[0]) + 1;
let poketmon = input.slice(1, nums);
let poketmonMap = new Map(poketmon.map((v, i)=>[v, i+1]));
let prob = input.slice(nums)
prob.forEach((v, i) => {
    if (poketmon[v - 1] != undefined)
        answer.push(poketmon[v - 1])
    else
        answer.push(poketmonMap.get(v))
})
console.log(answer.join("\n"))


// indexOf 쓰는것보단 Map 만들어서 가져오는게 시간초과 안남