// 2022-12-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let avg = 0;
    let temp = v.split(" ").map(val => Number(val)).slice(1)
    temp.map(val => avg += val);
    avg /= temp.length;
    let bigger = (temp.filter(val => val > avg).length) / temp.length * 100;
    answer.push(`${(avg + 1e-10).toFixed(3)} ${(bigger + 1e-10).toFixed(3)}%`)
})
console.log(answer.join("\n"));


// 문제 좀 이상한듯....
// 계속 틀렸다고 나와서 검색해봤더니 실수 오차때문에 1e-10 더해야 성공으로 나온다고 적혀있어서 그렇게 했더니 성공...
// 좀 어이없는 문제인거 같은데
