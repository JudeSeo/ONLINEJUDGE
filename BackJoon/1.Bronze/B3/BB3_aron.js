// 2022-10-01
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
function solution (input){
    input = input.slice(1);
    let answer = 1;
    for (let i = 1; i < input.length; i++) {
        if (input[i - 1] != input[i])
            answer++
    }
    console.log(answer+1)
}
