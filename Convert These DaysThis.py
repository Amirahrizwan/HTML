# Input number of days
total_days = int(input("Enter number of days: "))

years = total_days // 365
remaining_days = total_days % 365

months = remaining_days // 30
days = remaining_days % 30

print(f"{total_days} days = {years} years, {months} months, and {days} days")
