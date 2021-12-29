// 2021-12-27
function solution(lottos, win_nums) {
    var answer = [];
    var temp = lottos.filter((element) => 0 == element).length;
    var temp2 = lottos.filter(element => win_nums.includes(element)).length
    var max = 7 - temp - temp2 
    max = max < 1 ? 1 : max > 6 ? 6 : max
    var min = (7 - temp2) > 6 ? 6 : 7 - temp2;

    answer.push(max);
    answer.push(min);

    console.log(answer);
    return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]);


// 상당히 더럽게 풀린 문제다...
// 내가 너무 깨끗하게 못 푸는듯..ㅠ