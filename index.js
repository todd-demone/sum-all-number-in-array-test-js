const sumItems = function(array) {
  let sum = 0;
  for (const val of array) {
    // console.log(`sum: ${sum}`);
    // console.log(`val: ${val}`);
    // console.log(`is it an array? ${Array.isArray(val)}`);
    if (Array.isArray(val)) {
      // console.log(`calling sumItems again...`);
      sum += sumItems(val);
    } else {
      // console.log(`adding val to sum...`);
      sum += val;
      // console.log(`sum is now: ${sum}`);
      // console.log(`---------------------`);
    }
  }
  return sum;
};

// console.log(sumItems([1, [1, 1], 1]));
module.exports = sumItems;