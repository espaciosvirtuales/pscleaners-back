const assert = require('assert');
const app = require('../../src/app');

describe('\'categoriasOperadores\' service', () => {
  it('registered the service', () => {
    const service = app.service('categorias-operadores');

    assert.ok(service, 'Registered the service');
  });
});
