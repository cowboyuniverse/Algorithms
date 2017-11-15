# find missing number
def finder(arr1, arr2):
	missing = []
	dictionary = {}

	for key in arr1:
		dictionary[key] = 0

	for num in arr2:
		dictionary[num]+=1

	for num in arr1:
		if dictionar[num] ==0:
			missing.append(num)
	return missing

arr1 = [1,2,3,4,9,6,7, 5, 12, 11]
arr2 = [3,7,2,1,4,6, 9, 11]


# larggest continuous sum
def large_cont_sum(arr):
	current_sum = arr[0]
	max_sum = arr[0]

	if len(arr) == 0:
		return

	for j in range(1, len(arr)):
		if arr[j] > arr[j] + current_sum:
			current_sum = arr[j]
		else:
			current_sum += arr[j]

		if current_sum > max_sum:
			max_sum = current_sum
	return max_sum

print large_cont_sum([1,2,-1,3,4,10,10,-10,-1])
print large_cont_sum([2, -3, 4, -1, -2, 1, 5, -3])

# sentence reversal
def rev_words(s):
	words = []
	chars = []

	if len(s) < 0:
		return 

	for char in s:
		if char is " " and chars:
			words.append("".join(chars))
			chars = []
		elif char is not " ":
			chars.append(char)
		if chars:
			words.append("".join(chars))
		words = reverse(words)
		return words

def reverse(s):
	sentence = ""
	length = len(s) - 1
	while lenght >= 0:
		sentence += "".joins(s[length]) + " " 
		length -= 1
	return sentence


print rev_word('Hi John,   are you ready to go?')
print rev_word('    space before')


# string compression
def compress(string):
	length = len(string)
	count = 1
	stringLine = ""
	i = 1
	while i < length:
		if length is 1:
			return string[0] + '1'
		if string[i] is string[i-1]:
			count+=1
		else:
			stringLine = stringLine + string[i-1] + str(count)
			count = 1
		i +=1
	stringLine = stringLine + string[i-1] + str(count)
	return stringLine



print compress("AAAAABBBBBCCCCCaaaattttZZZZBBB")

#unique Character String, checking if there are the same amount of characters in the string

def unique_character_check(string):
	chars = set()
	for letter in string:
		if letter in chars:
			return False
		else:
			chars.add(letter)
	return True



unique_character_check("abc")