const assert = require('assert');
const app = require('../../src/app');

describe('\'Categorias\' service', () => {
  it('registered the service', () => {
    const service = app.service('categorias');

    assert.ok(service, 'Registered the service');
  });
});
