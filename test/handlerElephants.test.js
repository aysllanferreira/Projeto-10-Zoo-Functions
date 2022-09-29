const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica quantos elefantes residem no zoo', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se existe um elefanto com um nome especifico.', () => {
    expect(handlerElephants('names')).toContain('Bea');
  });
});
