// 2024-03-01
function solution(s) {
    var answer = true;
    let temp = s.split("");
    let left = temp.filter(v => v == "(").length;
    let right = temp.filter(v => v == ")").length;
    if (left != right) answer = false;
    else if (temp[0] == ")") answer = false;
    else {
        let cnt = 0;
        temp.forEach(v => {
            if (v == "(") cnt++;
            else cnt--;
            if (cnt < 0) return answer = false;
        })
        if (cnt != 0) answer = false;
    }
    console.log(answer);
    return answer;
}

solution("(()())()");