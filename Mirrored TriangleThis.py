rows = int(input("Enter number of rows: "))

for i in range(1, rows + 1):
    # Print spaces first
    print(" " * (rows - i), end="")
    # Then print stars
    print("*" * i)
