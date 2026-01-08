// 2021-12-14
function solution(sizes) {
    let answer = 0;
    let small, big, width = 0 , height = 0;
    for (let i = 0; i < sizes.length; i++) {
        small = sizes[i][0] > sizes[i][1] ? sizes[i][1] : sizes[i][0]
        big = sizes[i][0] < sizes[i][1] ? sizes[i][1] : sizes[i][0]
        sizes[i][0] = small;
        sizes[i][1] = big;
        width = sizes[i][0] > width ? sizes[i][0] : width;
        height = sizes[i][1] > height ? sizes[i][1] : height;
    }
    answer = width * height;
    console.log(answer);
    return answer;
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]]);
solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]);
solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]);