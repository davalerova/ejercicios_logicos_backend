const capitalizeLetters = (str) => {
  //Implementación
  const arrayWords = str.split(' ');
  let arrayWordsCapitalized = arrayWords.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  arrayWordsCapitalized = arrayWordsCapitalized.join(' ');
  return arrayWordsCapitalized;
};

module.exports = {
  capitalizeLetters,
};
