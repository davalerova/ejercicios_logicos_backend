function mcm(a, b) {
  return (a * b) / mcd(a, b);
}

let mcd = (a, b) => {
  return b === 0 ? a : mcd(b, a % b);
};

console.log(mcm(8, 16));

module.exports = mcm;
