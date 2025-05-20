# Input weight in kilograms and height in meters
weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (meters): "))

# Calculate BMI
bmi = weight / (height ** 2)

# Print BMI value
print("Your BMI is:", round(bmi, 2))

# Check BMI category
if bmi < 18.5:
    print("Underweight")
elif 18.5 <= bmi < 24.9:
    print("Normal weight")
elif 25 <= bmi < 29.9:
    print("Overweight")
else:
    print("Obesity")
