// Initializes the `Correos` service on path `/correos`
const { Correos } = require('./correos.class');
const createModel = require('../../models/correos.model');
const hooks = require('./correos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/correos', new Correos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('correos');

  service.hooks(hooks);
};
