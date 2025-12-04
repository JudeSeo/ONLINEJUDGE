// 2022-06-10
import java.io.*;
import java.util.*;

public class BS4_memorizingKing {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        for (int k = 0; k < num1; k++) {
            int num2 = Integer.parseInt(br.readLine());
            Set IntegerSet = new HashSet();
            st = new StringTokenizer(br.readLine());

            for (int i = 0; i < num2; i++) {
                IntegerSet.add(Integer.parseInt(st.nextToken()));
            }
            int cnt = 0;
            int num3 = Integer.parseInt(br.readLine());
            st = new StringTokenizer(br.readLine());
            for (int i = 0; i < num3; i++) {
                sb.append(IntegerSet.contains(Integer.parseInt(st.nextToken())) ? "1\n" : "0\n");
            }
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
