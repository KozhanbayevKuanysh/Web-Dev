x = int(input())
d = int(input())

count = 0

if x == 0 and d == 0:
    count = 1
else:
    while x > 0:
        if x % 10 == d:
            count += 1
        x //= 10

print(count)