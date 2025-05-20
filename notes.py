amount = int(input("Enter the amount: "))

notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
note_count = {}

for note in notes:
    count = amount // note
    if count > 0:
        note_count[note] = count
        amount = amount % note

print("Currency notes count:")
for note, count in note_count.items():
    print(f"{note} : {count}")
