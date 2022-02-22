// 2022-01-04
function solution(answers) {
    var answer = [];
    var s1 = [1, 2, 3, 4, 5];
    var s2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var cnt1 = 0;
    var cnt2 = 0;
    var cnt3 = 0;
    for (var i = 0; i < answers.length; i++) {
        if ((s1[i % s1.length]) == (answers[i % answers.length]))
            cnt1++
        if ((s2[i % s2.length]) == (answers[i % answers.length]))
            cnt2++
        if ((s3[i % s3.length]) == (answers[i % answers.length]))
            cnt3++
    }
    if (cnt1 > cnt2)
        cnt1 > cnt3 ? answer.push(1) : (cnt1 == cnt3 ? answer.push(1, 3) : answer.push(3))
    else if (cnt1 < cnt2)
        cnt2 > cnt3 ? answer.push(2) : (cnt2 == cnt3 ? answer.push(2, 3) : answer.push(3))
    else
        cnt1 > cnt3 ? answer.push(1, 2) : (cnt1 == cnt3 ? answer.push(1, 2, 3) : answer.push(3));
    console.log(answer);
    return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
solution([3, 3, 2, 1, 5]); //3
solution([5, 5, 4, 2, 3]); //123
solution([1, 2, 5, 5, 2]); // 1
solution([3, 3, 1, 1, 1, 1, 2, 3, 4, 5]); //13