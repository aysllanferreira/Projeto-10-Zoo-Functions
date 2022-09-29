const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica quantos elefantes residem no zoo', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se existe um elefanto com um nome especifico.', () => {
    expect(handlerElephants('names')).toContain('Bea');
  });

  it('Verifica qual eh a idade media dos elefantes do zoo.', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verifica quando nao ha parametros se a funcao retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
