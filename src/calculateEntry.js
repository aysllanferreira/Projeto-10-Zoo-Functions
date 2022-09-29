const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const childPrice = countEntrants(entrants).child * prices.child;
  const adultPrice = countEntrants(entrants).adult * prices.adult;
  const seniorPrice = countEntrants(entrants).senior * prices.senior;
  const total = childPrice + adultPrice + seniorPrice;
  return total;
}

module.exports = { calculateEntry, countEntrants };
