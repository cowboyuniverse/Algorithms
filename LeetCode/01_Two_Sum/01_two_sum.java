// #Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// #You may assume that each input would have exactly one solution, and you may not use the same element twice.

// # Example:
// # Given nums = [2, 7, 11, 15], target = 9,

// # Because nums[0] + nums[1] = 2 + 7 = 9,
// # return [0, 1].

class 01_two_sum {
	
	// public static void main(String[] args){

	// 	int[] nums = {1, 2, 15, 11, 7,0};
	// 	int target = 9;
	// 	int maxSize = 100;
	// 	int index_list [];
	// 	// Solution solution = new Solution();
	// 	index_list = twoSum(nums, target);

	// 	System.out.println(index_list);
	// 	return ;
	// }

 //    public int[] twoSum(int[] nums, int target) {
 //    	int[]  index_list = {1, 2, 15, 11, 7,0};
 //    	for (int i = 0; i < nums.length-1; i++){
 //    		System.out.print(nums[i]);
 //    	}
        

 //        return index_list;
 //    }



      public static void main(String[] args) {
      double[] myList = {1.9, 2.9, 3.4, 3.5};

      // Print all the array elements
      for (int i = 0; i < myList.length; i++) {
         System.out.println(myList[i] + " ");
      }
     
      // Summing all elements
      double total = 0;
      for (int i = 0; i < myList.length; i++) {
         total += myList[i];
      }
      System.out.println("Total is " + total);
      
      // Finding the largest element
      double max = myList[0];
      for (int i = 1; i < myList.length; i++) {
         if (myList[i] > max) max = myList[i];
      }
      System.out.println("Max is " + max);  
   }

}




