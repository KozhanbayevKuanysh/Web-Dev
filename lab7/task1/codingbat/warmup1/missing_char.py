def missing_char(str, n):
    front = str[:n]   # Everything up to (but not including) n
    back = str[n+1:]  # Everything from n+1 to the end
    return front + back