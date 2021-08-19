const isPalindrom = (word) => {
  const reversed = word.split("").reverse().join("");
  const result = word === reversed;
  return result;
};

module.exports = {
  isPalindrom,
};
