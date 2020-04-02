const assert = require('assert');
const app = require('../../src/app');

describe('\'export-excel\' service', () => {
  it('registered the service', () => {
    const service = app.service('export-excel');

    assert.ok(service, 'Registered the service');
  });
});
