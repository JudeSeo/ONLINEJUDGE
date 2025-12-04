// 2022-06-10
import java.io.*;
import java.util.*;

public class BS4_card {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        long[] numArr = new long[num1];

        for (int i = 0; i < num1; i++) {
            st = new StringTokenizer(br.readLine());
            numArr[i] = Long.parseLong(st.nextToken());
        }
        Arrays.sort(numArr);
        long max = numArr[0];
        long num = 1, cnt = 1;
        for (int i = 1; i < num1; i++) {
            if (numArr[i] == numArr[i - 1])
                cnt++;
            else
                cnt = 1;
            if (cnt > num) {
                num = cnt;
                max = numArr[i];
            }
        }

        sb.append(max);
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
