const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica quantos elefantes residem no zoo', () => {
    expect(handlerElephants('count')).toBe(4);
  });
});
