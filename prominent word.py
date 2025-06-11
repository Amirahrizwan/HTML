# Input: sentence from the user
sentence = input("Enter a sentence: ")

# Split the sentence into words
words = sentence.lower().split()

# Create a dictionary to count word frequency
word_count = {}

for word in words:
    word_count[word] = word_count.get(word, 0) + 1

# Find the word with the highest frequency
prominent_word = max(word_count, key=word_count.get)

# Output
print("The prominent word is:", prominent_word)
print("It appears", word_count[prominent_word], "times.")
