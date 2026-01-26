// 2026-01-26
package Programmers.level0;

import java.util.Arrays;

public class P0_alienDic {
    public static void main(String[] args) {
        System.out.println(solution(new String[]{"p", "o", "s"}, new String[]{"sod", "eocd", "qixm", "adio", "soo"})); // 2
        System.out.println(solution(new String[]{"z", "d", "x"}, new String[]{"def", "dww", "dzx", "loveaw"})); // 1
        System.out.println(solution(new String[]{"s", "o", "m", "d"}, new String[]{"moos", "dzx", "smm", "sunmmo", "som"})); // 2
        System.out.println(solution(new String[]{"a", "b", "c"}, new String[]{"c", "a"})); // 1
    }

    public static int solution(String[] spell, String[] dic) {
        int answer = 2;
        Arrays.sort(spell);
        Arrays.sort(dic);
        for (int i = 0; i < dic.length; i++) {
            if (dic[i].length() != spell.length) continue;
            char[] charArr = dic[i].toCharArray();
            Arrays.sort(charArr);
            String dicChar = new String(charArr);
            String spellStr = String.join("", spell);
            answer = dicChar.equals(spellStr) ? 1 : 2;
            if (answer == 1) break;
        }
        return answer;
    }
}
