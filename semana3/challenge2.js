function minMax(aNumbs) {
  //Implementación
  if (aNumbs.length < 2) return false;
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < aNumbs.length; i++) {
    const element = aNumbs[i];
    element < min && (min = element);

    element > max && (max = element);
  }
  return { min, max };
}

console.log(minMax([1, 2, 3, 4, 5]));

module.exports = minMax;
