import simpleTestSun from ".";

describe('simpleTestSun', function () {
  it('simpleTestSun', function () {
    expect(simpleTestSun(3, 4)).toBe(7);
  });
});

describe('Environment', function () {
  it('Deve verificar se as variáveis de ambiente estão sendo definidas', function () {
    expect(process.env.TEST).toBe('ENVIRONMENT_TESTING...');
  });
});