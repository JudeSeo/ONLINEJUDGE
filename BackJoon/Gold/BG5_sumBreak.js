// 2022-04-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = 0;
let first = parseInt(input[0]);
let second = parseInt(input[1]);
let result1 = factorial(first + second - 1, first);
let result2 = factorial(first, first);
answer = parseInt(result1 / result2)
console.log(answer);

function factorial(num1, num2) {
    let result = 1;
    for (let i = num1 - num2 + 1; i <= num1; i++) {
        result *= i;
    }
    return result;
}

// 예제는 풀리는데.... 틀렸다.. 중복조합으로 풀 수 있는거 같은데.. 다른걸로 풀어야 하는듯..