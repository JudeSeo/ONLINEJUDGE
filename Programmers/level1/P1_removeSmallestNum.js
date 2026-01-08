// 2021-11-17
function solution(arr) {
    let answer = [];
    let a = arr.slice();
    let b = "";
    if(arr.length == 1)
        answer[0] = -1;
    else{
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(a[i]>a[j]){
                    b=a[i];
                    a[i]=a[j];
                    a[j]=b;
                }
            }
        }
        arr.splice(arr.indexOf(a[0]),1);
        answer = arr.slice();
    }
    console.log(answer);
    return answer;
}

solution([4,3,2,1]);