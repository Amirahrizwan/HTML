# Function to check the type of character
def check_character(char):
    if char.isalpha():
        print("It is an Alphabet.")
    elif char.isdigit():
        print("It is a Digit.")
    else:
        print("It is a Special Character.")

# Taking input from user
character = input("Enter a single character: ")

# Checking if only one character is entered
if len(character) == 1:
    check_character(character)
else:
    print("Please enter only a single character.")
