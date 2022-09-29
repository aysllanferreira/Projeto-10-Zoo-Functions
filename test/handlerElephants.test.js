const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica quantos elefantes residem no zoo', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se existe um elefante com um nome especifico.', () => {
    expect(handlerElephants('names')).toContain('Bea');
  });

  it('Verifica qual eh a idade media dos elefantes do zoo.', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verifica quando nao ha parametros se a funcao retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Verifica se quando passa um nome inexistente retorna null.', () => {
    expect(handlerElephants('Yoga')).toBe(null);
  });

  it('Verifica se o parametro passado eh uma string.', () => {
    expect(handlerElephants(312)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se handlerElephants eh uma funcao.', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Verifica a localizacao da jaula dos elefantes.', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Verifica a popularidade dos elefantes.', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Verifica quais dias esta disponivel ver os elefantes.', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
