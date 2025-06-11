# Input from user
n = int(input("Enter a whole number: "))

# Check if the number is non-negative
if n >= 0:
    # Sum formula: n(n+1)/2
    total = n * (n + 1) // 2
    print("The sum of whole numbers from 0 to", n, "is:", total)
else:
    print("Please enter a non-negative whole number.")
