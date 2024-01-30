// 2022-07-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let food = input[0].split(" ");
let people = input[1].split(" ");
answer += (people[0] - food[0] <= 0 ? 0 : people[0] - food[0]);
answer += (people[1] - food[1] <= 0 ? 0 : people[1] - food[1]);
answer += (people[2] - food[2] <= 0 ? 0 : people[2] - food[2]);
console.log(answer);
