const assert = require('assert');
const app = require('../../src/app');

describe('\'Empleados\' service', () => {
  it('registered the service', () => {
    const service = app.service('empleados');

    assert.ok(service, 'Registered the service');
  });
});
