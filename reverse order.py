# Input: taking numbers from user
numbers = input("Enter numbers separated by spaces: ")

# Splitting the input string into a list
num_list = numbers.split()

# Reversing the list
reversed_list = num_list[::-1]

# Output
print("Numbers in reverse order:")
for num in reversed_list:
    print(num, end=' ')
