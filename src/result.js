export function resultLabel(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  }
  if (score >= 75) {
    return "Passed";
  }
  return "Needs improvement";
}

export function gradeLetter(score) {
  if (score === NaN) {
    return "Invalid";
  }
  if (score >= 90) {
    return "A";
  } else if (score >= 90) {
    return "B";
  }
  return "C";
}
