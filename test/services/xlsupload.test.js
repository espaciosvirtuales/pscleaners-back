const assert = require('assert');
const app = require('../../src/app');

describe('\'xlsupload\' service', () => {
  it('registered the service', () => {
    const service = app.service('xlsupload');

    assert.ok(service, 'Registered the service');
  });
});
