const sayHello = string => {
  return `Hello, ${string}!`;
};
const uppercase = string => string.toUpperCase();

const lowercase = string => string.toLowerCase();

const countCharacters = string => string.length;

const firstCharacter = string => string[0];

const firstCharacters = (string, n) => {
  return string.substring(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
