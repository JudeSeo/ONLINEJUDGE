// 2021-11-11
function solution(a, b) {
    let answer = '';
    let week = {0:"SUN",
                1:"MON",
                2:"TUE",
                3:"WED",
                4:"THU",
                5:"FRI",
                6:"SAT"
                };
    let date = new Date(2016, a-1, b);
    let date2 = date.getDay();
    answer = week[date2];
    console.log(answer);
    return answer;
}
solution(5,23);