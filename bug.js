function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  } else {
    return a + b; // Original logic
  }
}