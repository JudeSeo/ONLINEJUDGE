// 2022-07-15
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
let input = 0;
rl.on('line', function (line) {
    input = Number(line);
    let answer = 100/(Number(input)*1.609344)*3.785411784
    console.log(answer.toFixed(6));
    rl.close();
}).on('close', function(){
    process.exit();
})

// 입력방식이 원래쓰던게 안되서 readLine으로 바꿔서 하느라 좀 어려웠다...
