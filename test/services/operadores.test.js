const assert = require('assert');
const app = require('../../src/app');

describe('\'Operadores\' service', () => {
  it('registered the service', () => {
    const service = app.service('operadores');

    assert.ok(service, 'Registered the service');
  });
});
