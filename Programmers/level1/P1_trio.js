/// 2024-02-24
function solution(number) {
    let arr = [];
    for (let i = 0; i < number.length; i++) {
        for (let j = i; j < number.length; j++) {
            for (let k = j; k < number.length; k++) {
                if (i != j && j != k && i != k)
                    arr.push(number[i] + number[j] + number[k]);
            }
        }
    }
    let answer = arr.filter(v => v == 0).length;
    return answer;
}

solution([-2, 3, 0, 2, -5]);