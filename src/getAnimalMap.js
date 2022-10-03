const data = require('../data/zoo_data');

const { species } = data;

const getAllNames = (e) => e.name;

const theFilter = (gender, residents) => {
  const writeNames = residents.filter((e) => e.sex === gender).map(getAllNames);
  return writeNames;
};

const optNormal = (name, gender, residents) => ({ [name]: theFilter(gender, residents) });
const optSorted = (name, gender, residents) => ({ [name]: theFilter(gender, residents).sort() });
const locNormal = (name, gender, residents) => ({ [name]: residents.map((nomes) => nomes.name) });
const locSorted = (name, gender, residents) => ({ [name]: residents
  .map((nomes) => nomes.name).sort() });

const getOptions = (gender, sorted, callback, callback2) => species
  .reduce((acc, { location, name, residents }) => {
    const newAcc = acc;
    if (sorted === undefined) {
      newAcc[location].push(callback(name, gender, residents));
    } else {
      newAcc[location].push(callback2(name, gender, residents));
    }
    return newAcc;
  }, { NE: [], NW: [], SE: [], SW: [] });

const findArea = () => species.reduce((acc, { location, name }) => {
  const newAcc = acc;
  newAcc[location].push(name);
  return newAcc;
}, { NE: [], NW: [], SE: [], SW: [] });

const verifyPt1 = (includeNames, sorted, sex) => {
  if (!includeNames) return findArea();
  if (includeNames && !sorted && !sex) return getOptions(sex, sorted, locNormal, locSorted);
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
    return getOptions(sex, sorted, locNormal, locSorted);
  }
  if (sex) return getOptions(sex, sorted, optNormal, optSorted);
}

module.exports = getAnimalMap;
