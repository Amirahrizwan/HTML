# Input units consumed
units = float(input("Enter the number of electricity units consumed: "))

# Initialize bill
bill = 0

# Calculate bill based on slab rates
if units <= 100:
    bill = units * 5.0  # ₹5 per unit for first 100 units
elif units <= 200:
    bill = (100 * 5.0) + ((units - 100) * 7.0)  # ₹7 per unit for next 100 units
else:
    bill = (100 * 5.0) + (100 * 7.0) + ((units - 200) * 10.0)  # ₹10 per unit above 200

# Display the total bill
print(f"Your electricity bill is: ₹{bill:.2f}")
