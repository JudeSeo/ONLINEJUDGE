// 2022-06-10

import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BS5_forecastIntern {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        int num2 = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        long[] numSet = new long[num1 + 1];
        long[] prefixSet = new long[num1 - num2 + 1];
        for (int i = 0; i < num1; i++) {
            numSet[i] = Integer.parseInt(st.nextToken());
        }
        for (int i = 0; i < num1 - num2 + 1; i++) {
            for (int j = i; j < i + num2; j++) {
                prefixSet[i] += numSet[j];
            }
        }

        Arrays.sort(prefixSet);
        sb.append(prefixSet[prefixSet.length - 1]);
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
