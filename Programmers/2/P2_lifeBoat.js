// 2022-01-04
function solution(people, limit) {
    var answer = 0;
    var end = people.length - 1;
    people.sort((a, b) => { return b - a });
    for (var i = 0; i <= end; i++) {
        answer++;
        for (var j = end; j > 0; j--) {
            if (limit >= people[i] + people[j]) {
                end--;
                break;
            } else {
                break;
            }
        }
    }
    console.log(answer);
    return answer;
}

solution([70, 50, 80, 50], 100);
solution([70, 80, 50], 100);
solution([40, 50, 150, 160], 200); //2
solution([100, 500, 500, 900, 950], 1000); //3