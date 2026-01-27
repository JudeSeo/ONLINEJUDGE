// 2026-01-27
package Programmers.level0;

import java.util.Arrays;

public class P0_findMid {
    public static void main(String[] args) {
        System.out.println(solution(new int[]{9, -1, 0}));
    }

    public static int solution(int[] array) {
        Arrays.sort(array);
        int answer = array[array.length / 2];
        return answer;
    }
}
