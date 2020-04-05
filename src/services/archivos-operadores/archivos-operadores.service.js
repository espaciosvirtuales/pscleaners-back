// Initializes the `archivosOperadores` service on path `/archivos-operadores`
const { ArchivosOperadores } = require('./archivos-operadores.class');
const createModel = require('../../models/archivos-operadores.model');
const hooks = require('./archivos-operadores.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/archivos-operadores', new ArchivosOperadores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('archivos-operadores');

  service.hooks(hooks);
};
