class Main{

    public static void main(String args[]){

        /* instantianting java array 
    
        dataType[] arr;
        dataType []arr;
        dataType arr[];
        arrayRefVAr = new datatype[size];
    
        */
        

        /* instantianting java array */
        int a[] = new int [5];
        a[0] = 10;
        a[1] = 20;
        a[2] = 30;
        a[3] = 40;
        a[4] = 50;
        for (int i = 0; i < a.length; i++){
            System.out.println(a[i]);
        }

        /* instantianting java array */
        // int b[] = {33, 3, 4, 5};
        // for (int i = 0; i < b.length; i++){
        //     System.out.println(b[i]);
        // }

        /* passing array as a function */
        // int c[] = {33, 3, 4, 5};
        // Main main = new Main();
        // main.min(c);


      /* 2d array instantiate
         dataType[][] arrayRefVar; (or)
         dataType [][]arrayRefVar; (or)
         dataType arrayRefVar[][]; (or)
         dataType []arrayRefVar[]
      */


      /*  2d array instantiate */
    //   int[][]  arr2d = new int [3][3];
    //   arr2d[0][0] = 1;
    //   arr2d[0][1] = 2;
    //   arr2d[0][2] = 3;
    //   arr2d[1][0] = 4;
    //   arr2d[1][1] = 5;
    //   arr2d[1][2] = 6;
    //   arr2d[2][0] = 7;
    //   arr2d[2][1] = 8;
    //   arr2d[2][2] = 9;
    //   for (int i = 0; i < 3;i++){
    //       for(int j = 0; j < 3;j++){
    //         System.out.println(arr2d[i][j]);
    //       }
    //   }

      /*  2d array instantiate */
      int[][] array2d = {{1,2,3},{2,4,5},{4,4,5}};
        for (int i = 0; i < 3;i++){
          for(int j = 0; j < 3;j++){
            System.out.print(array2d[i][j] + " ");
          }
          System.out.println("");
      }
      
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