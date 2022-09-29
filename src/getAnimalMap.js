const data = require('../data/zoo_data');

const { species } = data;

const getAllNames = (e) => e.name;

const theFilter = (gender, residents) => {
  const writeNames = residents.filter((e) => e.sex === gender).map(getAllNames);
  return writeNames;
};

const getOptions = (gender, sorted) => species.reduce((acc, { location, name, residents }) => {
  const newAcc = acc;
  if (sorted === undefined) {
    newAcc[location].push({ [name]: theFilter(gender, residents) });
  } else {
    newAcc[location].push({ [name]: theFilter(gender, residents).sort() });
  }
  return newAcc;
}, {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
});

const findArea = () => species.reduce((acc, { location, name }) => {
  const newAcc = acc;
  newAcc[location].push(name);
  return newAcc;
}, {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
});

const findAnimalName = (sorted) => species.reduce((acc, { location, name, residents }) => {
  const newAcc = acc;
  if (sorted === undefined) {
    newAcc[location].push({ [name]: residents.map((nomes) => nomes.name) });
  } else {
    newAcc[location].push({ [name]: residents.map((nomes) => nomes.name).sort() });
  }
  return newAcc;
}, {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
});

const verifyPt1 = (includeNames, sorted, sex) => {
  if (!includeNames) return findArea();
  if (includeNames && !sorted && !sex) return findAnimalName(sorted);
  return false;
};

const verifyPt2 = (options, sorted, sex) => {
  if (options.includeNames && sorted !== undefined && !sex) return true;
  return false;
};

function getAnimalMap(options) {
  if (options === undefined) return findArea();
  const { includeNames, sorted, sex } = options;
  if (verifyPt1(includeNames, sorted, sex)) return verifyPt1(includeNames, sorted, sex);
  if (verifyPt2(options, sorted, sex)) {
    return findAnimalName(sorted);
  }
  if (sex) return getOptions(sex, sorted);
}

module.exports = getAnimalMap;
