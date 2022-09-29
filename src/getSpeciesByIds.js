const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

module.exports = getSpeciesByIds;
