const data = require('../data/zoo_data');

const { species, employees } = data;

const handleLocation = (param) => {
  const getPeople = employees.find(({ id, firstName, lastName }) =>
    param.id === id || param.name === firstName || param.name === lastName).responsibleFor;
  const layLocation = [];
  getPeople.forEach((location) => {
    layLocation.push(species.find(({ id }) => id === location).location);
  });
  return layLocation;
};

const handleAnimals = (param) => {
  const getAnimals = employees.find(({ id, firstName, lastName }) =>
    param.id === id || param.name === firstName || param.name === lastName).responsibleFor;
  const layAnimal = [];
  getAnimals.forEach((animal) => {
    layAnimal.push(species.find(({ id }) => id === animal).name);
  });
  return layAnimal;
};

const findPeople = (param) => {
  const people = employees.find(({ id, firstName, lastName }) =>
    param.id === id || param.name === firstName || param.name === lastName);
  if (people === undefined) return undefined;
  const answer = {
    id: people.id,
    fullName: `${people.firstName} ${people.lastName}`,
    species: handleAnimals(param),
    locations: handleLocation(param),
  };
  return answer;
};

const handleAll = () => {
  const allKind = employees.reduce((acc, people) => {
    const newCounter = acc;
    newCounter.push({
      id: people.id,
      fullName: `${people.firstName} ${people.lastName}`,
      species: handleAnimals(people),
      locations: handleLocation(people),
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
