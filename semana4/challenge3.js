function isSpecialArray(specialArr) {
  for (let i = 0; i < specialArr.length; i++) {
    if (i % 2 !== specialArr[i] % 2) return false;
  }
  return true;
}

module.exports = isSpecialArray;
