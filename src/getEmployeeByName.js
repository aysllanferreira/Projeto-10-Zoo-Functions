const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((pessoa) => employeeName === pessoa
    .firstName || employeeName === pessoa.lastName);
}

module.exports = getEmployeeByName;
