// 2022-06-13
import java.io.*;
import java.util.*;

public class BS3_NumberOfDifferentPartialStrings {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        Set set = new TreeSet();
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        String str = st.nextToken();
        for (int i = 0; i < str.length(); i++) {
            for (int j = i + 1; j <= str.length(); j++) {
                set.add(str.substring(i, j));
            }
        }
        sb.append(set.size());

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
