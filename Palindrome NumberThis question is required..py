def is_palindrome(number):
    original = str(number)
    reverse = original[::-1]
    return original == reverse

# Example usage
num = int(input("Enter a number: "))
if is_palindrome(num):
    print(f"{num} is a Palindrome number.")
else:
    print(f"{num} is not a Palindrome number.")
