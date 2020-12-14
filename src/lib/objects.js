const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => Boolean(object[property]);

const isOver65 = person => Boolean(person.age > 65);

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  let sum = 0;
  let i = 0;
  for (i= 0; i < people.length; i++) {
    const person = people[i].age;
    sum += person;
  }
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce(friendName) {
      return `Hi ${friendName}, my name is ${this.name} and I am ${this.age}!`
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
