// Initializes the `Archivos` service on path `/archivos`
const { Archivos } = require('./archivos.class');
const createModel = require('../../models/archivos.model');
const hooks = require('./archivos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/archivos', new Archivos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('archivos');

  service.hooks(hooks);
};
