const assert = require('assert');
const app = require('../../src/app');

describe('\'archivosOperadores\' service', () => {
  it('registered the service', () => {
    const service = app.service('archivos-operadores');

    assert.ok(service, 'Registered the service');
  });
});
