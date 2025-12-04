// 2022-03-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
let list = input[0].split(" ");
input = input.slice(2);
input.forEach((v, i) => {
    v = v.split(" ");
    let sum = 0;
    for (let i = v[0] - 1; i < v[1]; i++) {
        sum += parseInt(list[i]);
    }
    answer.push(sum);
});
console.log(answer.join("\n"));

// 구간합 prefix 이용하라는데... 잘모르겠다..
// 전체 더한 값을 가지고 있는 상태로 구간이 아닌값을 빼라고 한다..