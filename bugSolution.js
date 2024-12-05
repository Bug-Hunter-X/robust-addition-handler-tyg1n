function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null and undefined values appropriately
  } else {
    return a + b;
  }
}
//Additional handling for non-numeric values
function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //or throw an error
  } else if (a === null || b === null || a === undefined || b === undefined) {
      return 0; 
  } else {
    return a + b;
  }
}