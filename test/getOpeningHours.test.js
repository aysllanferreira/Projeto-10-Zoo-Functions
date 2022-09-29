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

  it('Verifica se o zoo esta fechado num horario que deveria estar.', () => {
    expect(getOpeningHours('Wednesday', '10:00-PM')).toBe('The zoo is closed');
  });

  it('Verifca se o parametro do dia foi passado corretamente.', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se a abreviacao das horas esta correta.', () => {
    expect(() => getOpeningHours('Friday', '09:00-VO')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se a hora eh um numero.', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Verifica se os minutos sao um numero', () => {
    expect(() => getOpeningHours('Tuesday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
});
