// 2026-03-07
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let [n, k] = input[0].split(" ").map(v => Number(v));
input = input.slice(1).map(v => v.split(" ").map(val => Number(val)));
let answer = solution();
console.log(answer);

function solution() {
    let map = new Map();
    map.set(0, 0);
    for (const [w, v] of input) {
        const cur = [...map.entries()];
        for (const [weight, value] of cur) {
            const newWeight = weight + w;
            if (newWeight > k) continue;
            const newValue = value + v;
            if (!map.has(newWeight) || map.get(newWeight) < newValue) {
                map.set(newWeight, newValue);
            }
        }
    }
    return Math.max(...map.values());
}