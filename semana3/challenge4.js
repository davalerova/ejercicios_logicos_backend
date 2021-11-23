function toArray(obj) {
  //Implementación
  let arrayObj = [];
  for (let clave in obj) {
    arrayNew = [];
    arrayNew.push(clave);
    arrayNew.push(obj[clave]);
    arrayObj.push(arrayNew);
  }
  return arrayObj;
}

module.exports = toArray;
