function getMax(arr) {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

module.exports = getMax;
