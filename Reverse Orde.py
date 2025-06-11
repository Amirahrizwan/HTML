# Input list of numbers
numbers = input("Enter numbers separated by spaces: ").split()

# Reverse the list
reversed_numbers = numbers[::-1]

# Display
print("Reversed order:", ' '.join(reversed_numbers))
