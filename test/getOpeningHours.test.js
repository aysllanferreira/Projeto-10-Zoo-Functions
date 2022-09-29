const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';

  it('Verifica se getOpeningHours eh uma funcao', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Verifica se qualquer horario de segunda o zoo ta fechado', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toBe(closed);
  });

  it('Verifica se o zoo esta aberto num dia que deveria estar.', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Verifica se o zoo esta fechado num horario que deveria estar.', () => {
    expect(getOpeningHours('Wednesday', '10:00-PM')).toBe(closed);
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

  it('Verifica se a hora vai ate 12 apenas.', () => {
    expect(() => getOpeningHours('Sunday', '15:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se os minutos vai ate 59 apenas.', () => {
    expect(() => getOpeningHours('Sunday', '12:79-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Verifica se ao colocar 12 horas, o teste passa.', () => {
    expect(getOpeningHours('Tuesday', '12:00-AM')).toBe(closed);
  });

  it('Verifica se quando passa parametro vazio, retorna os dias da semana!', () => {
    const obj = { Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 } };

    expect(getOpeningHours()).toStrictEqual(obj);
  });
});
