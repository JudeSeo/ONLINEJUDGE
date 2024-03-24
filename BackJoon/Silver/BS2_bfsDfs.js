// 2024-03-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../예제.txt").toString().trim().split('\r\n');
const [N, M, V] = input.splice(0, 1)[0].split(' ').map(Number);
const edges = input.map(v => v.split(' ').map(Number));
const graph = [...Array(N + 1)].map(() => []);
edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
});

const dfs = (start) => {
    const stack = [start];
    const visited = Array(N + 1).fill(false);
    const order = [];
    while (stack.length) {
        const node = stack.pop();
        if (!visited[node]) {
            visited[node] = true;
            order.push(node);
            stack.push(...graph[node]);
        }
    }
    console.log(order.join(' '));
};

const bfs = (start) => {
    const queue = [start];
    const visited = Array(N + 1).fill(false);
    const order = [];
    while (queue.length) {
        const node = queue.shift();
        if (!visited[node]) {
            visited[node] = true;
            order.push(node);
            queue.push(...graph[node]);
        }
    }
    console.log(order.join(' '));
};

graph.forEach(v => v.sort((a, b) => b - a));
dfs(V);

graph.forEach(v => v.sort((a, b) => a - b));
bfs(V);