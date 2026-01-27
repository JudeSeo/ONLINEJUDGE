// 2026-01-27
package Programmers.level0;

public class P0_sharePizza3 {
    public static void main(String[] args) {
        System.out.println(solution(7, 10));
        System.out.println(solution(4, 12));
    }

    public static int solution(int slice, int n) {
        int answer = (int) Math.ceil((double) n / slice);
        return answer;
    }
}
