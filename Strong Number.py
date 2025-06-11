import math

def is_strong_number(num):
    total = 0
    for digit in str(num):
        total += math.factorial(int(digit))
    return total == num

# Example usage
n = int(input("Enter a number: "))
if is_strong_number(n):
    print(f"{n} is a Strong Number.")
else:
    print(f"{n} is NOT a Strong Number.")
