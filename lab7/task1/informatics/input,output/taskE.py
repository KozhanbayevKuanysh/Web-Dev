v = int(input())
t = int(input())

s = v * t
while s > 109:
    s -= 109

while s < 0:
    s += 109

print(s)