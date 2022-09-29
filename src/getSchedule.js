const data = require('../data/zoo_data');

const { species, hours } = data;

const checkAvailability = () => {
  const chaves = Object.keys(hours);
  const valores = Object.values(hours);
  const arrVazio = [];
  chaves.forEach((e, i) => {
    arrVazio.push({
      [e]: {
        officeHour: `Open from ${valores[i].open}am until ${valores[i].close}pm`,
        exhibition: species.filter(({ availability }) => availability.includes(e))
          .map(({ name }) => name),
      },
    });
  });
  arrVazio[arrVazio.length - 1].Monday.officeHour = 'CLOSED';
  arrVazio[arrVazio.length - 1].Monday.exhibition = 'The zoo will be closed!';
  return arrVazio;
};

const proFORdarcerto = (chaves, valores, arrVazio) => {
  chaves.forEach((chave, i) => {
    arrVazio.push({
      [chave]: { open: valores[i].open, close: valores[i].close },
    });
  });
};

const checkDay = (param) => {
  const arrVazio = [];
  const chaves = Object.keys(hours);
  const valores = Object.values(hours);
  proFORdarcerto(chaves, valores, arrVazio);
  const avAnimals = species.filter(({ availability }) => availability.includes(param));
  if (param === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const getNames = avAnimals.map(({ name }) => name);
  const getHours = arrVazio.filter((e) => Object.keys(e).includes(param));
  const answer = {
    [param]: {
      officeHour: `Open from ${Object.values(getHours[0])[0]
        .open}am until ${Object.values(getHours[0])[0].close}pm`,
      exhibition: getNames,
    },
  };
  return answer;
};

function getSchedule(scheduleTarget) {
  const chaves = Object.keys(hours);
  const getAnimalAvailability = species.find(({ name }) => name === scheduleTarget);
  if (getAnimalAvailability) return getAnimalAvailability.availability;
  if (!scheduleTarget) return Object.assign(...checkAvailability());
  if (chaves.some((day) => day.includes(scheduleTarget))) return checkDay(scheduleTarget);
  return Object.assign(...checkAvailability());
}

module.exports = getSchedule;
