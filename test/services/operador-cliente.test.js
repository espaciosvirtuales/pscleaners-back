const assert = require('assert');
const app = require('../../src/app');

describe('\'OperadorCliente\' service', () => {
  it('registered the service', () => {
    const service = app.service('operador-cliente');

    assert.ok(service, 'Registered the service');
  });
});
