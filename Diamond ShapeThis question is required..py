def print_diamond(n):
    # Upper half
    for i in range(1, n + 1):
        print(" " * (n - i) + "*" * (2 * i - 1))
    # Lower half
    for i in range(n - 1, 0, -1):
        print(" " * (n - i) + "*" * (2 * i - 1))

# Example usage
rows = int(input("Enter number of rows: "))
print_diamond(rows)
