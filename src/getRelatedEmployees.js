const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
