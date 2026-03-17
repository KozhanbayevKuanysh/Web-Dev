n = int(input())

numbers = list(map(int, input().split()))

count = 0

for i in range(1, n):
    if numbers[i] > numbers[i - 1]:
        count += 1

print(count)