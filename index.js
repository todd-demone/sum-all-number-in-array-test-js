const sumItems = function(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (const val of array) {
    // recursive case - is the current item an array?
    if (Array.isArray(val)) {
      sum += sumItems(val);
    // base case - is the current item a number?
    } else {
      sum += val;
    }
  }
  return sum;
};

module.exports = sumItems;