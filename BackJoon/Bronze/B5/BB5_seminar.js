// 2024-05-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('../../../예제.txt').toString().trim().split('\r\n').slice(1);
const room = {
    Algorithm: "204",
    DataAnalysis: "207",
    ArtificialIntelligence: "302",
    CyberSecurity: "B101",
    Network: "303",
    Startup: "501",
    TestStrategy: "105",
}
let answer = [];
input.forEach(v => {
    answer.push(room[v]);
})
console.log(answer.join("\n"));