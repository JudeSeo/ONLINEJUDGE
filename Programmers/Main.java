package Programmers;
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        NavigableSet<String> peopleSet = new TreeSet<String>();
        for (int i = 0; i < num1; i++) {
            st = new StringTokenizer(br.readLine());
            String name = st.nextToken();
            String move = st.nextToken();
            if (move.equals("enter"))
                peopleSet.add(name);
            else
                peopleSet.remove(name);
        }

        ArrayList<String> arr = new ArrayList();
		Iterator<String> it = peopleSet.iterator();
		while(it.hasNext()) {
			arr.add(it.next());
		}
		
		Collections.sort(arr);
		Collections.reverse(arr);

        for (String s : arr) {
            sb.append(s + "\n");
        }

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}