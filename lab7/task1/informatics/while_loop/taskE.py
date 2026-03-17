n = int(input())

current_power_of_2 = 1
k = 0

while current_power_of_2 < n:
    current_power_of_2 *= 2
    k += 1

print(k)