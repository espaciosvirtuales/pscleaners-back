const assert = require('assert');
const app = require('../../src/app');

describe('\'fileupload\' service', () => {
  it('registered the service', () => {
    const service = app.service('fileupload');

    assert.ok(service, 'Registered the service');
  });
});
