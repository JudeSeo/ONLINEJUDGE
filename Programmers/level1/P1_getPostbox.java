// 2025-12-30
package Programmers;

class P1_getPostbox {
    public static void main(String[] args) {
//        System.out.println(solution(22, 6, 8));
        System.out.println(solution(12, 3, 6));
        System.out.println(solution(100, 9, 47));
    }

    public static int solution(int n, int w, int num) {
        int answer;
        int a = (num - 1) / w;
        int b = (num - 1) % w;
        int c;
        if (a % 2 == 0) {
            c = b;
        } else {
            c = w - b - 1;
        }
        int d = n / w;
        answer = d - a;
        if (n % w != 0) {
            if (d % 2 == 0) {
                if ((n - 1) % w >= c) answer++;
            } else {
                if (w - ((n - 1) % w) - 1 <= c) answer++;
            }
        }
        return answer;
    }
}