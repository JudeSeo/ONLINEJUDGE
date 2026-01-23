// 2026-01-23
package Programmers.level0;

public class P0_printAge {
    public static void main(String[] args) {
        System.out.println(solution(23));
    }

    public static int solution(int age) {
        int answer = 2022 - age + 1;
        return answer;
    }
}
