import java.lang.reflect.Modifier;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

interface StringFunction {
    String run(String str);
}

public class Main {
    public static void main (String[] args) {
        StringFunction exclaim =(s) -> s + "!";
        StringFunction ask =(s) -> s + "?";
        printFormatted("Hello",exclaim);
        printFormatted("Hello", ask);
        reg();

    }
    public static void printFormatted(String str, StringFunction format) {
        String result = format.run(str);
        System.out.println(result);
    }

    public static void reg () {
        Pattern pattern = Pattern.compile("schools", Pattern.CASE_INSENSITIVE);
        Matcher mathcer = pattern.matcher("Visit schools");
        boolean Found = mathcer.find();
        if(Found){
            System.out.println("Match found");
        } else {
            System.out.println("Not found");
        }
    }

    public void hash() {
        HashMap<String, String> capitalCities= new HashMap<String,String>();

        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        capitalCities.put("China", "Beijing");

        System.out.println(capitalCities);
        capitalCities.get("England");

        capitalCities.clear();

        for (String i: capitalCities.keySet()) {
            System.out.println(i);
            System.out.println("key"+i+"value:"+capitalCities.get(i)); // Print keys and values
        }
    }

    public static void modifier () {
        final int x= 1000;

    }

    public static void threads(){
        
    }
}


