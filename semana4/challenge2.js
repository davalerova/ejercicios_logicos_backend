function isEqual(objInput1, objInput2) {
  //Implementación
  let equal = true;

  for (let [key, val] of Object.entries(objInput1)) {
    if (objInput2.hasOwnProperty(key)) {
      if (objInput2[key] !== val) {
        equal = false;
      }
    } else {
      equal = false;
    }

    if (!equal) {
      break;
    }
  }

  return equal;
}

module.exports = isEqual;
