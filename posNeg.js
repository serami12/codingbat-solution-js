function posNeg(a, b, negative) {
  if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    return true
  } else if (a < 0 && b < 0 && negative === true) {
    return true
  }

  return false
}