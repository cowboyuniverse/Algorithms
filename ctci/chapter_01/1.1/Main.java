/*
is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
*/

class Main{
    public static void main(String args[]){
        Main main = new Main();
        // main.uniqueCharacters("abcd");
        // main.uniqueCharacters("Þ");
        // main.uniqueCharacters("Ç");
        main.uniqueCharacters("abcdza");
    }

    boolean uniqueCharacters(String string){
        if (string.length() > 256){
            System.out.println("false");
            return false;
        }
        boolean[] charSet = new boolean [256];
        for (int i = 0; i < string.length(); i++){
            int val = string.charAt(i);
            if(charSet[val]){
                System.out.println("false");
                return false;
            }
            charSet[val]= true;          
        }

        System.out.println("true");
        return true;
    }
}