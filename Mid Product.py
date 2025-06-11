def mid_product(number):
    num_str = str(number)
    length = len(num_str)
    
    if length == 1:
        return int(num_str)  # Only 1 digit
    elif length % 2 == 1:
        # Odd digits: take the middle one
        mid = length // 2
        return int(num_str[mid])
    else:
        # Even digits: multiply the two middle digits
        mid1 = length // 2 - 1
        mid2 = length // 2
        return int(num_str[mid1]) * int(num_str[mid2])

# Example usage
num = int(input("Enter a number: "))
print("Mid Product is:", mid_product(num))
