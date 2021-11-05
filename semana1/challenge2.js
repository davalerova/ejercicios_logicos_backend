///Ejercicio no.2
// ✕ Debería de invertir los dígitos del entero 123 a 321 (33 ms)
// ✕ Debería de invertir los dígitos del entero 13689 a 98631 (10 ms)
// ✕ Debería de invertir los dígitos del entero 13940 a 4931 (13 ms)
// ✕ Debería de invertir los dígitos del entero -13940 a -4931 (15 ms)
// ✕ Debería de invertir los dígitos del entero -13940 a -4931 (13 ms)
// ✕ Debería de arrojar un error al pasar un tipo de dato diferente a number como argumento (1 ms)

const reverseInt = (number) => {
  //Implementación
  if (typeof number === 'number') {
    let negative = false;
    if (number < 0) {
      negative = true;
    }
    let num = String(number);
    num = num.split('').reverse().join('');
    num = parseInt(num);
    negative ? (num = num * -1) : num;
    return num;
  }
  throw new Error('Argumento no valido');
};

module.exports = {
  reverseInt,
};
