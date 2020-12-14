const negate = a => {
  return !a;
};

const both = (a, b) => {
  return Boolean(a && b);
};

const either = (a, b) => {
  return Boolean(a || b);
};

const none = (a, b) => {
  return negate(either(a || b));
};

const one = (a, b) => {
  return (!a && b) || (a && !b);
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return Boolean(a === b);
};

const isGreaterThan = (a, b) => {
  return Boolean(a > b);
};

const isLessThanOrEqualTo = (a, b) => {
  return Boolean(a <= b);
};

const isOdd = a => {
  return a % 2 !== 0;
};

const isEven = a => {
  return Number.isInteger(a / 2);
};

const isSquare = a => {
  return Number.isInteger(Math.sqrt(a));
};

const startsWith = (char, string) => {
  return string.startsWith("a", char);
};

const containsVowels = string => {
  return string.search("[eoiaAEOI]") >= 0;
};

const isLowerCase = string => {
  return string.toLowerCase() === string;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
