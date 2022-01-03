// 2022-01-03
function solution(n) {
    var answer = 0;
    var primeChk = [0, 0];
    for (var i = 2; i <= n; i++) {
        if (i % 2 == 0)
            primeChk[i] = 0;
        else
            primeChk[i] = i;
    }
    primeChk[2] = 2;
    for (var i = 3; i <= n; i++) {
        for (var j = (i + i); j <= n; j += i) {
            primeChk[j] = 0
        }
    }

    primeChk.forEach(value => {
        if (value > 0)
            answer++;
    });
    console.log(answer);
    return answer;
}

solution(10);
solution(5);


// 일반적으로 for문 사용해도 문제는 풀리지만... 효율성에서 걸린다..
// 무조건 에라토스테네스의 체를 이용해야지만 효율성 통과한다.