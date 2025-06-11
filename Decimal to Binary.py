def decimal_to_binary(n):
    binary = ''
    while n > 0:
        binary = str(n % 2) + binary
        n //= 2
    return binary or "0"  # handles 0

# Example usage
num = int(input("Enter a decimal number: "))
print(f"Binary of {num} is {decimal_to_binary(num)}")
