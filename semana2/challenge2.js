function divisibleByLeft(n) {
  //Implementación
  let number = String(n);
  let res = [false];
  for (let i = 1; i < number.length; i++) {
    Number(number[i]) % Number(number[i - 1]) === 0
      ? res.push(true)
      : res.push(false);
  }
  return res;
}

module.exports = divisibleByLeft;
