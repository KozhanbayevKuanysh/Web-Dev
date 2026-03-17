binary = input()
decimal = 0
power = 0

for digit in reversed(binary):
    if digit == '1':
        decimal += 2 ** power
    power += 1

print(decimal)