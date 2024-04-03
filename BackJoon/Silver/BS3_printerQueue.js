// 2024-04-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let [n, m] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    let queue = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    let cnt = 0;
    while (true) {
        let max = Math.max(...queue);
        let num = queue.shift();
        if (num == max) {
            cnt++;
            if (m === 0) {
                answer.push(cnt);
                break;
            }
        } else queue.push(num);
        if (m === 0) m = queue.length - 1;
        else m--;
    }
}
console.log(answer.join("\n"));