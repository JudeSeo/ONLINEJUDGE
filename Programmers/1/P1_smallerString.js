// 2024-02-23
function solution(t, p) {
    let arr = [];
    for (let i = 0; i < t.length - p.length + 1; i++) {
        arr.push(t.slice(i, i + p.length));
    }
    let answer = arr.filter(v => v <= p).length;
    return answer;
}

solution("10203", "15");