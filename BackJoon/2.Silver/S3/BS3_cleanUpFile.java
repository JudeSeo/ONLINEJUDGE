// 2022-06-13
import java.io.*;
import java.util.*;

public class BS3_cleanUpFile {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        Map<String, Integer> map = new TreeMap();
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num = Integer.parseInt(st.nextToken());
        for (int i = 0; i < num; i++) {
            st = new StringTokenizer(br.readLine());
            String str = st.nextToken().split("[.]")[1];
            map.put(str, map.getOrDefault(str, 0) + 1);
        }

        for (String s : map.keySet()) {
            sb.append(s).append(" ").append(map.get(s)).append("\n");
        }

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
