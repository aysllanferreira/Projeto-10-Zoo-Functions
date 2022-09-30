const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const getSpecies = species.map(({ name, residents }) => ({ [name]: residents.length })).sort();
  if (!animal) return Object.assign({ }, ...getSpecies);

  const quantity = species.find((animals) => animals.name === animal.specie);
  const gender = quantity.residents.filter((animals) => animals.sex === animal.sex);
  if (!animal.sex) return quantity.residents.length;
  if (animal.sex) return gender.length;
}

module.exports = countAnimals;
