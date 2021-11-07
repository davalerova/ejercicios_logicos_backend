function twoSums(numbs, target) {
  for (let i = 0; i < numbs.length - 1; i++) {
    for (let j = i + 1; j < numbs.length; j++) {
      if (numbs[i] + numbs[j] === target) {
        return Array(i, j);
      }
    }
  }
}

module.exports = twoSums;
