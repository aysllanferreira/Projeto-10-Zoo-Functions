const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours eh uma funcao', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Verifica se qualquer horario de segunda o zoo ta fechado', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toBe('The zoo is closed');
  });

  it('Verifica se o zoo esta aberto num dia que deveria estar.', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
});
