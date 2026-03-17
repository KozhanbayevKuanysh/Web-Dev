n = int(input())

numbers = list(map(int, input().split()))

found = False

for i in range(1, n):
    if (numbers[i] > 0 and numbers[i - 1] > 0) or (numbers[i] < 0 and numbers[i - 1] < 0):
        found = True
        break 

if found:
    print("YES")
else:
    print("NO")