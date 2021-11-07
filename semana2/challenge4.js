const EARTH_MASS = 148940000;
function landMass(country, mass) {
  //Implementación
  let percent = (mass / EARTH_MASS) * 100;
  percent = percent.toFixed(2);

  return {
    percent: Number(percent),
    message: `${country} representa el ${percent}% de la masa de la tierra`,
  };
}
module.exports = landMass;
