// 2022-04-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let price = Number(input[1].split(" ")[0]);
let topPrice = Number(input[1].split(" ")[1]);
let kcal = Number(input[2]);
let bestPizza = kcal / price;
input = input.slice(3)
input.sort((a, b) => (b - a))
input.forEach((v, i) => {
    kcal += Number(v);
    price += topPrice;
    bestPizza = bestPizza > (kcal / price) ? bestPizza : kcal / price;
})
console.log(parseInt(bestPizza));