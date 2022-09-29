const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, minAge) {
  return species.find(({ name }) => name === animal)
    .residents.every(({ age }) => age >= minAge);
}

module.exports = getAnimalsOlderThan;
