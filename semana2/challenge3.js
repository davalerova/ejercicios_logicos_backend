function arrayOfMultiples(num, length) {
  let res = [];
  for (let i = 1; i <= length; i++) {
    res.push(i * num);
  }
  return res;
}

module.exports = arrayOfMultiples;
