const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours eh uma funcao', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
});
