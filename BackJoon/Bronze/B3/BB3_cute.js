// 2023-02-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let cute = input.filter(v => v == 1).length;
let notCute = input.filter(v => v == 0).length;
let answer = cute > notCute ? "\"Junhee is cute!" : "Junhee is not cute!"
console.log(answer);

// 메모리초과가 나타나고 있음. 
// 왜인지는 모르겠으나 질문에도 메모리가 너무 작게 잡혀있어 에러가 날 수 밖에 없는 상황이라고 함
// 네이버에 떠도는 자바로 해답 제출