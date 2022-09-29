const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const getSpecies = species.reduce((obj1, obj2) => {
    const getResults = obj1;
    getResults[obj2.name] = obj2.residents.length;
    return obj1;
  }, {});
  if (!animal) {
    return getSpecies;
  }
  const quantity = species.find((animals) => animals.name === animal.specie);
  const gender = quantity.residents.filter((animals) => animals.sex === animal.sex);
  if (!animal.sex) {
    return quantity.residents.length;
  } if (animal.sex) {
    return gender.length;
  }
}

module.exports = countAnimals;
