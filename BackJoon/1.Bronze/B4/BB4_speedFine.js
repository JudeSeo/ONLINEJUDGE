// 2022-07-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = "Congratulations, you are within the speed limit!"
if (input[0] < input[1]) {
  let speed = input[1] - input[0]
  if (speed >= 1 && speed <= 20)
    answer = "You are speeding and your fine is $100.";
  else if (speed >= 21 && speed <= 30)
    answer = "You are speeding and your fine is $270."
  else
    answer = "You are speeding and your fine is $500."
}

console.log(answer);
