class Main{

    public static void main(String args[]){

        /* instantianting java array 
    
        dataType[] arr;
        dataType []arr;
        dataType arr[];
        arrayRefVAr = new datatype[size];
    
        */
        

        /* instantianting java array */
        // int a[] = new int [5];
        // a[0] = 10;
        // a[1] = 20;
        // a[2] = 30;
        // a[3] = 40;
        // a[4] = 50;
        // for (int i = 0; i < a.length; i++){
        //     System.out.println(a[i]);
        // }

        /* instantianting java array */
        // int b[] = {33, 3, 4, 5};
        // for (int i = 0; i < b.length; i++){
        //     System.out.println(b[i]);
        // }

        /* passing array as a function */
        // int c[] = {33, 3, 4, 5};
        // Main main = new Main();
        // main.min(c);

      /*  */

    }
    void min(int arr[]){
        int min = arr[0];
        for (int i = 1; i < arr.length; i++){
            if (min > arr[i]){
                min = arr[i];
            }
        }
        System.out.println(min);
    }
}