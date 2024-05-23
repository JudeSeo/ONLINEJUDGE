// 2024-05-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n');
let [n, m] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let arr = input.splice(0, n).map(v => v.split(" ").map(val => Number(val)));
let cloud = [[n - 1, 0], [n - 1, 1], [n - 2, 0], [n - 2, 1]]
let answer = 0;
const move = (direction, num) => {
    switch (direction) {
        case 1: // 왼쪽
            cloud.forEach(v => {
                if (v[1] < (num % n)) v[1] += n
                v[1] -= (num % n);
            })
            break;
        case 2: // 왼쪽위대각선
            cloud.forEach(v => {
                if (v[0] < (num % n)) v[0] += n
                v[0] -= (num % n);
                if (v[1] < (num % n)) v[1] += n
                v[1] -= (num % n);
            })
            break;
        case 3: // 위
            cloud.forEach(v => {
                if (v[0] < (num % n)) v[0] += n
                v[0] -= (num % n);
            })
            break;
        case 4: // 오른쪽위대각선
            cloud.forEach(v => {
                if (v[0] < (num % n)) v[0] += n
                v[0] -= (num % n);
                if (v[1] + (num % n) > n - 1) v[1] -= n
                v[1] += (num % n);
            })
            break;
        case 5: // 오른쪽
            cloud.forEach(v => {
                if (v[0] + (num % n) > n - 1) v[0] -= n
                v[0] += (num % n);
            })
            break;
        case 6: // 오른쪽아래대각선
            cloud.forEach(v => {
                if (v[0] + (num % n) > n - 1) v[0] -= n
                v[0] += (num % n);
                if (v[1] + (num % n) > n - 1) v[1] -= n
                v[1] += (num % n);
            })
            break;
        case 7: // 아래
            cloud.forEach(v => {
                if (v[0] + (num % n) > n - 1) v[0] -= n
                v[0] += (num % n);
            })
            break;
        case 8: // 왼쪽아래대각선
            cloud.forEach(v => {
                if (v[1] < (num % n)) v[1] += n
                v[1] -= (num % n);
                if (v[0] + (num % n) > n - 1) v[0] -= n
                v[0] += (num % n);
            })
            break;
    }
}

input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    move(temp[0], temp[1]);
    cloud.forEach(val => {
        arr[val[0]][val[1]]++;
    })
    cloud.forEach(val => {
        if (val[0] + 1 < n) {
            if (val[1] + 1 < n) arr[val[0]][val[1]] = arr[val[0] + 1][val[1] + 1] != 0 ? arr[val[0]][val[1]] + 1 : arr[val[0]][val[1]];
            if (val[1] - 1 >= 0) arr[val[0]][val[1]] = arr[val[0] + 1][val[1] - 1] != 0 ? arr[val[0]][val[1]] + 1 : arr[val[0]][val[1]];
        }
        if (val[0] - 1 >= 0) {
            if (val[1] + 1 < n) arr[val[0]][val[1]] = arr[val[0] - 1][val[1] + 1] != 0 ? arr[val[0]][val[1]] + 1 : arr[val[0]][val[1]];
            if (val[1] - 1 >= 0) arr[val[0]][val[1]] = arr[val[0] - 1][val[1] - 1] != 0 ? arr[val[0]][val[1]] + 1 : arr[val[0]][val[1]];
        }
    })
    let tmpArr = [];
    arr.forEach((val, i) => {
        val.forEach((value, index) => {
            if (value >= 2) {
                if (cloud.find(el => el[0] == i && el[1] == index) == undefined) {
                    tmpArr.push([i, index]);
                    arr[i][index] -= 2;
                }
            }
        })
    })
    cloud = [...tmpArr];
})
arr.forEach(v => {
    v.forEach(val => {
        answer += val;
    })
})
console.log(answer);