function solution(numbers) {
    let answer = '';
    numbers.sort((a, b) => {
        return (b.toString() + a) - (a.toString() + b)
    });

    answer = numbers.join("")
    console.log(answer);
    return answer[0] == 0 ? '0' : answer;
}
solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);


// 다른 사람 풀이 참조해서 풀었다...