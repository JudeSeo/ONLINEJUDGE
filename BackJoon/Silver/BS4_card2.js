// 2023-12-13
var fs = require('fs');
// let input = Number(fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]);
var input = Number(fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0]);
const binArr = input.toString(2).split("");
binArr.shift();
let result = parseInt(binArr.join(""), 2);
const answer = result ? result * 2 : input;
console.log(answer);

// 그냥 풀면 메모리 초과...
// 규칙 찾아서 풀어야하는거 같다.
// 이건 내가 푼건 아니지만 시프트 연산을 써서 좋은 참고가 될 코드인 것 같다.
