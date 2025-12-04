// 2022-09-08
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});
let input =[];
rl.on("line", function(line){
    input.push(line);
}).on("close", function(){
    solution(input);
    process.exit();
});
const solution = (input) => {
    let x = input[0];
    let n = Number(input[1]);
    input = input.slice(2);
    let answer = x * (n + 1)
    input.forEach(v => {
        answer -= v;
    })
    console.log(answer);
}

// readline 사용해야하는 문제...
// 처음쓰는 방식이라 겁나 안됨...