// 2026-01-27
package Programmers.level0;

public class P0_sharePizza2 {
    public static void main(String[] args) {
        System.out.println(solution(6));
        System.out.println(solution(10));
        System.out.println(solution(7));
        System.out.println(solution(4));
    }

    public static int solution(int n) {
        int answer = 0;
        for (int i = 1; i <= 6; i++) {
            if (n * i % 6 == 0) {
                answer = i * n / 6;
                break;
            }
        }
        return answer;
    }
}
