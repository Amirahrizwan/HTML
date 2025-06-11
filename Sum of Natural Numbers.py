# Input: Get a number from the user
n = int(input("Enter a positive number: "))

# Check if the number is natural
if n > 0:
    # Sum formula: n * (n + 1) // 2
    total = n * (n + 1) // 2
    print("Sum of first", n, "natural numbers is:", total)
else:
    print("Please enter a positive natural number.")
