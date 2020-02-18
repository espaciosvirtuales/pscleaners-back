const assert = require('assert');
const app = require('../../src/app');

describe('\'Usuarios\' service', () => {
  it('registered the service', () => {
    const service = app.service('usuarios');

    assert.ok(service, 'Registered the service');
  });
});
