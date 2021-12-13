function solution(n, m) {
    var answer = [];
    var bigger = n > m ? n : m;
    var smaller = n > m ? m : n
    if (bigger % smaller == 0) {
        answer.push(smaller);
        answer.push(bigger);
    } else {
        for (var i = smaller; i >= 1; i--) {
            var div1 = bigger % i
            var div2 = smaller % i
            if (div1 == 0 && div2 == 0) {
                answer.push(i);
                break;
            }
        }
        var mul1 = bigger / answer[0];
        var mul2 = smaller / answer[0];
        answer.push(mul1 * mul2 * answer[0]);
    }
    console.log(answer);
    return answer;
}

solution(3, 12);
solution(2, 5);