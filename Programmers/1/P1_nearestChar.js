// 2024-02-25
function solution(s) {
    var answer = [];
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(0, i).split("").reverse().join("");
        str.indexOf(s[i]);
        answer.push(str.indexOf(s[i]) == -1 ? -1 : str.indexOf(s[i]) + 1);
    }
    return answer;
}

solution("foobar");