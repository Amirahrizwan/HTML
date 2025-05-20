temperature = float(input("Enter temperature (°C): "))
smoke_detected = input("Is smoke detected? (yes/no): ").lower()

if temperature > 50 or smoke_detected == 'yes':
    print("Fire Alert! Activate Fire Brigade.")
else:
    print("No Fire detected.")
