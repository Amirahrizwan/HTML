def count_characters(text):
    result = {}
    for char in text:
        if char in result:
            result[char] += 1
        else:
            result[char] = 1
    return result

# Example usage
input_str = input("Enter a string: ")
occurrences = count_characters(input_str)

for char, count in occurrences.items():
    print(f"'{char}' occurs {count} times")
