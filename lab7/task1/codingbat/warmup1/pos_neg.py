def pos_neg(a, b, negative):
  if (negative and a < 0 and b < 0) or (not negative and a < 0 and b >= 0) or (not negative and b < 0 and a >= 0):
    return True
  else:
    return False
