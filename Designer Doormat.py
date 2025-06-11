def designer_doormat(n, m):
    # Top part
    for i in range(1, n, 2):
        pattern = (".|." * i).center(m, "-")
        print(pattern)
    
    # Middle welcome line
    print("WELCOME".center(m, "-"))
    
    # Bottom part
    for i in range(n - 2, 0, -2):
        pattern = (".|." * i).center(m, "-")
        print(pattern)

# Example usage
n = int(input("Enter number of rows (odd): "))
m = int(input("Enter number of columns (3 x rows): "))
designer_doormat(n, m)
