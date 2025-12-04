// 2022-06-10
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        int num2 = Integer.parseInt(st.nextToken());
        int num3 = Integer.parseInt(st.nextToken());

        long[] numSet = new long[num1 + 1];
        long[] cntArr = new long[num1 - num2 + 1];

        for (int i = 0; i < num3; i++) {
            st = new StringTokenizer(br.readLine());
            numSet[Integer.parseInt(st.nextToken())-1] = 1;
        }
        for (int i = 0; i < num1 - num2 + 1; i++) {
            int cnt = 0;
            for (int j = i; j < i + num2; j++) {
                if (numSet[j] == 1)
                    cnt++;
            }
            cntArr[i] = cnt;
        }
        Arrays.sort(cntArr);
        sb.append(cntArr[0]);
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
