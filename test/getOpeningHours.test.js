const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours eh uma funcao', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Verifico se qualquer horario de segunda o zoo ta fechado', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toBe('The zoo is closed');
  });
});
