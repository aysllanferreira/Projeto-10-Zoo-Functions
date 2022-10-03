const data = require('../data/zoo_data');

const { species, employees } = data;

const putLocation = (location) => species.find(({ id }) => id === location).location;
const putName = (name) => species.find(({ id }) => id === name).name;

const handleLocAnimal = (param, callback) => {
  const getPeople = employees.find(({ id, firstName, lastName }) =>
    param.id === id || param.name === firstName || param.name === lastName).responsibleFor;
  const layLocation = [];
  getPeople.forEach((thing) => {
    layLocation.push(callback(thing));
  });
  return layLocation;
};

const findPeople = (param) => {
  const people = employees.find(({ id, firstName, lastName }) =>
    param.id === id || param.name === firstName || param.name === lastName);
  if (people === undefined) return undefined;
  const answer = {
    id: people.id,
    fullName: `${people.firstName} ${people.lastName}`,
    species: handleLocAnimal(param, putName),
    locations: handleLocAnimal(param, putLocation),
  };
  return answer;
};

const handleAll = () => {
  const allKind = employees.reduce((acc, people) => {
    const newCounter = acc;
    newCounter.push({
      id: people.id,
      fullName: `${people.firstName} ${people.lastName}`,
      species: handleLocAnimal(people, putName),
      locations: handleLocAnimal(people, putLocation),
    });
    return newCounter;
  }, []);
  return allKind;
};

function getEmployeesCoverage(param = {}) {
  if (Object.keys(param).length === 0) return handleAll();
  if (findPeople(param) !== undefined) return findPeople(param);
  const verifyParam = employees.find(({ id, firstName, lastName }) =>
    param.id === id || param.name === firstName || param.name === lastName);
  if (verifyParam === undefined) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
