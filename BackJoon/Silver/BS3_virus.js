// 2024-03-26
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../예제.txt").toString().trim().split('\r\n');
let [qty, pair] = input.splice(0, 2).map(v => Number(v))
let answer = 0;
let visited = Array(qty + 1).fill(false);
let graph = [...Array(qty + 1)].map(() => []);
input.map(v => {
    let [from, to] = v.split(" ").map(val => Number(val));
    graph[from].push(to);
    graph[to].push(from);
});

const bfs = (start) => {
    let queue = [start];
    while (queue.length) {
        const node = queue.shift();
        if (!visited[node]) {
            visited[node] = true;
            answer++;
            queue.push(...graph[node]);
        }
    }
};

bfs(1);
console.log(answer - 1);


// dfs, bfs 공부해야겠다...