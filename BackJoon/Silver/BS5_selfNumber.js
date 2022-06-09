// 2022-02-22
function solution(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        let sum = i;
        let num = i
        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10)
        }
        if (i != sum)
            arr[sum] = 1;
    }
    for (let i = 1; i < number; i++) {
        if (arr[i] != 1)
            console.log(i);

    }
}

solution(10000);