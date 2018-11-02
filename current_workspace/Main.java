class Main{
    public static void main(String[] args){
        Main main = new Main();
        main.checkUniqueChar("abac");


    }


    boolean checkUniqueChar(String string){
        if (string.length() > 128){
            System.out.println("false");
            return false;
        }

        boolean[] charSet = new boolean[128];
        for (int i = 0; i < string.length(); i++){
            int val = string.charAt(i);
            if(charSet[val]){
                System.out.println("false");
                return false;
            }
            charSet[val] = true;
        }
        System.out.println("true");
        return true;

    }
}