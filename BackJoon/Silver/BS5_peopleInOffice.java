
// 2022-06-11
import java.io.*;
import java.util.*;

public class BS5_peopleInOffice {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        HashMap<String, String> peopleMap = new HashMap<>();
        for (int i = 0; i < num1; i++) {
            st = new StringTokenizer(br.readLine());
            String name = st.nextToken();
            String move = st.nextToken();
            if (move.equals("enter")) {
                peopleMap.put(name, move);
            } else {
                peopleMap.replace(name, move);
            }
        }
        ArrayList<String> arr = new ArrayList<>();
        for (String s : peopleMap.keySet()) {
            if (peopleMap.get(s).equals("enter")) {
                arr.add(s);
            }
        }

        Collections.sort(arr, Collections.reverseOrder());
        for (String s : arr) {
            sb.append(s + "\n");
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}

// set으로 풀었더니 런타임에러....
// map으로 바꿨는데도 런타임에러...
// 왜 런타임에러??