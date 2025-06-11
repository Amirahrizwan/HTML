def floyd_triangle(rows):
    num = 1
    for i in range(1, rows + 1):
        for j in range(i):
            print(num, end=' ')
            num += 1
        print()  # New line after each row

# Example usage
n = int(input("Enter number of rows: "))
floyd_triangle(n)
