// 2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = ["Gnomes:"];
input.forEach((v, i) => {
    let temp = v.split(" ");
    let comp = temp.slice(0).sort((a, b)=>a-b);
    if(JSON.stringify(temp) == JSON.stringify(comp))
        answer.push("Ordered");
    else {
        comp.sort((a, b)=>b-a);
        if(JSON.stringify(temp) == JSON.stringify(comp))
            answer.push("Ordered");
        else
            answer.push("Unordered")
    }
})
console.log(answer.join("\n"));
