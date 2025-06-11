# Exam Eligibility Check Program

# Input: total classes and classes attended
total_classes = int(input("Enter the total number of classes held: "))
attended_classes = int(input("Enter the number of classes attended: "))

# Calculate attendance percentage
attendance_percentage = (attended_classes / total_classes) * 100

# Display attendance
print(f"Your attendance percentage is: {attendance_percentage:.2f}%")

# Check eligibility
if attendance_percentage >= 75:
    print("You are eligible to appear for the exam.")
else:
    print("You are NOT eligible to appear for the exam.")
