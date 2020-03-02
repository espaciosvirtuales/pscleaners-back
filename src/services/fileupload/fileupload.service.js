// Initializes the `fileupload` service on path `/fileupload`
const { Fileupload } = require('./fileupload.class');
const createModel = require('../../models/fileupload.model');
const hooks = require('./fileupload.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fileupload', new Fileupload(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fileupload');

  service.hooks(hooks);
};
