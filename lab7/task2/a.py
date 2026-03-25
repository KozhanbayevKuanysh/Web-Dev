def vowel_count (s):
    count = 0
    for i in range(len(s)):
        if s[i] in ['a','e','u','i','o']:
            count += 1

    return count

print(vowel_count("asdaedas"))