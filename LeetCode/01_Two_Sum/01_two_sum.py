#Given an array of integers, return indices of the two numbers such that they add up to a specific target.

#You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:
# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        list_index = []
        length = len(nums) - 1
        for i in range(0, len(nums)):
        	for j in range(1, len(nums)):
        		if nums[i] + nums[j] == target:
        			list_index.append(i)
        			list_index.append(j)
        		if i == j:
        			break
        return list_index


nums = [1, 2, 15, 11, 7,0]
target = 9

solution= Solution()
index_list = solution.twoSum(nums, target)
print(index_list)
