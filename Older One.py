# Take input from user
char = input("Enter a single character: ")

# Check if input is a single character
if len(char) == 1:
    if (char >= 'a' and char <= 'z') or (char >= 'A' and char <= 'Z'):
        print("It is an Alphabet.")
    elif char >= '0' and char <= '9':
        print("It is a Digit.")
    else:
        print("It is a Special Character.")
else:
    print("Please enter only one character.")
