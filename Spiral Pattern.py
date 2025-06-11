def print_spiral(n):
    spiral = [[0]*n for _ in range(n)]
    value = 1
    top = 0
    bottom = n - 1
    left = 0
    right = n - 1

    while value <= n*n:
        for i in range(left, right + 1):
            spiral[top][i] = value
            value += 1
        top += 1

        for i in range(top, bottom + 1):
            spiral[i][right] = value
            value += 1
        right -= 1

        for i in range(right, left - 1, -1):
            spiral[bottom][i] = value
            value += 1
        bottom -= 1

        for i in range(bottom, top - 1, -1):
            spiral[i][left] = value
            value += 1
        left += 1

    for row in spiral:
        print(' '.join(str(num).rjust(2) for num in row))

# Example usage
n = int(input("Enter size of spiral (e.g., 4): "))
print_spiral(n)
