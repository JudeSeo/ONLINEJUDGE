// 2024-07-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../예제.txt").toString().trim().split('\r\n');
let answer = [];
for (let i = 0; i < input.length; i += 2) {
    if (input[i] == 0) break;
    let page = Number(input[i]);
    let arr = input[i + 1].split(",");
    let set = new Set();
    arr.forEach(v => {
        let pages = v.split("-").map(v => Number(v));
        if (pages.length == 2) {
            if (pages[0] == pages[1] && pages[0] <= page) set.add(pages[0]);
            else if (pages[0] < pages[1]) {
                if (pages[0] <= page) {
                    pages[1] = Math.min(page, pages[1]);
                    for (let j = pages[0]; j <= pages[1]; j++) {
                        set.add(j);
                    }
                }
            }
        } else {
            if (pages[0] <= page)
                set.add(pages[0]);
        }
    })
    answer.push(set.size);
}
console.log(answer.join("\n"));