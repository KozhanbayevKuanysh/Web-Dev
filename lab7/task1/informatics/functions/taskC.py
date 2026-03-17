def xor(x, y):
    if x != y:
        return True
    else:
        return False

data = input().split()
val1 = bool(int(data[0]))
val2 = bool(int(data[1]))

result = xor(val1, val2)

print(int(result))