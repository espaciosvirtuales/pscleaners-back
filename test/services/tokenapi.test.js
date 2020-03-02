const assert = require('assert');
const app = require('../../src/app');

describe('\'tokenapi\' service', () => {
  it('registered the service', () => {
    const service = app.service('tokenapi');

    assert.ok(service, 'Registered the service');
  });
});
