const reverseString = (str) => {
  //Implementación
  if (typeof str === 'string' && str.length > 1 && str.length < 15) {
    return str.split('').reverse().join('');
  }
  throw new Error('Argumento no valido');
};

module.exports = {
  reverseString,
};
