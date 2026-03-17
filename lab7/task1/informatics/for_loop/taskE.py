x = int(input())
sum_digits = 0

while x > 0:
    last_digit = x % 10  
    sum_digits += last_digit 
    x //= 10        
    
print(sum_digits)