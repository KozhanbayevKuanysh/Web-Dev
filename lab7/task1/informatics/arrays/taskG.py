n = int(input())
a = list(map(int, input().split()))

for i in range(n // 2):
    opposite_index = n - 1 - i
    
    a[i], a[opposite_index] = a[opposite_index], a[i]

print(*a)