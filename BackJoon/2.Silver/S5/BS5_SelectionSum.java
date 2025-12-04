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
        st = new StringTokenizer(br.readLine());
        int[] numSet = new int[num1 + 1];
        for (int i = 0; i < num1; i++) {
            numSet[i + 1] = numSet[i] + Integer.parseInt(st.nextToken());
        }

        st = new StringTokenizer(br.readLine());
        int num2 = Integer.parseInt(st.nextToken());

        for (int i = 0; i < num2; i++) {
            st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            sb.append(numSet[to+1] - numSet[from] + "\n");
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
