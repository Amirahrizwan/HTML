def is_right_triangle(a, b, c):
    sides = sorted([a, b, c])
    return sides[0]**2 + sides[1]**2 == sides[2]**2

# Example usage
a = int(input("Enter side 1: "))
b = int(input("Enter side 2: "))
c = int(input("Enter side 3: "))

if is_right_triangle(a, b, c):
    print("It is a Right Angle Triangle.")
else:
    print("It is NOT a Right Angle Triangle.")
