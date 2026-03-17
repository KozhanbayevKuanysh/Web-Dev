def min2(a, b):
    if a < b:
        return a
    return b

def min4(a, b, c, d):
    res = min2(a, b)
    res = min2(res, c)
    res = min2(res, d)
    return res

numbers = list(map(int, input().split()))

print(min4(numbers[0], numbers[1], numbers[2], numbers[3]))