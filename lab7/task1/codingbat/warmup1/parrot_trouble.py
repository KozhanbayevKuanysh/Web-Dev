def parrot_trouble(talking, hour):
  if not talking or (hour >= 7 and hour <= 20):
    return False
  else:
    return True
