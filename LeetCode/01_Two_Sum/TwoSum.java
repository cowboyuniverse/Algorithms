// #Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// #You may assume that each input would have exactly one solution, and you may not use the same element twice.

// # Example:
// # Given nums = [2, 7, 11, 15], target = 9,

// # Because nums[0] + nums[1] = 2 + 7 = 9,
// # return [0, 1].

class TwoSum {
	
	public static void main(String[] args){

		int[] nums = {1, 2, 15, 11, 7,0};
		int target = 9;


		int [] index_list ;
		index_list = twoSum(nums, target);

		for(int i = 0; i < index_list.length; i++){
			System.out.println(index_list[i]);
		}
		
		return ;
	}

    public static int[] twoSum(int[] nums, int target) {
    	int index = 0;
    	int[]  index_list = new int[2];
    	// int index = 0;
    	for (int i = 0; i < nums.length; i++){
    		for (int j = 1; j < nums.length-1; j++){
    			if(target == nums[i] + nums[j]){
    				index_list[index] = i;
    				index +=1;

    				index_list[index]= j;
    				index+=1;
    			}
    			if (i == j){
    				break;
    			}
    		}
    	}
        return index_list;
    }

}




