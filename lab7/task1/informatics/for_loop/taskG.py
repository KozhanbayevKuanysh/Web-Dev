s = int(input())
min = s
for i in range(2, s + 1):
    if s % i == 0:
        min = i
        break
print(min)    