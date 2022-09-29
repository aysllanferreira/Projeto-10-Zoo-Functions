const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(ids) {
  const getPeople = employees.filter(({ id }) => id === ids)[0].responsibleFor;
  const theAnimal = species.find(({ id }) => id === getPeople[0]).residents
    .sort((r1, r2) => r2.age - r1.age)[0];
  return Object.values(theAnimal);
}

module.exports = getOldestFromFirstSpecies;
