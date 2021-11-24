function keysAndValues(objInput) {
  //Implementación
  keysArray = [];
  valuesArray = [];
  for (let clave in objInput) {
    keysArray.push(clave);
  }

  keysArray = keysArray.sort();
  keysArray.forEach((element) => {
    valuesArray.push(objInput[element]);
  });
  return [keysArray, valuesArray];
}
console.log(keysAndValues({ a: 1, c: 3, b: 2 }));
module.exports = keysAndValues;
