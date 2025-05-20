# String declaration
s = "Hello World"

# Length of string
print("Length:", len(s))

# Accessing characters
print("First character:", s[0])
print("Last character:", s[-1])

# Slicing
print("First 5 characters:", s[:5])
print("From index 6 to end:", s[6:])

# Concatenation
s2 = "Python"
result = s + " " + s2
print("Concatenation:", result)

# Repetition
print("Repetition:", s * 2)

# Upper and lower
print("Uppercase:", s.upper())
print("Lowercase:", s.lower())

# Replace
print("Replace 'World' with 'Python':", s.replace("World", "Python"))
