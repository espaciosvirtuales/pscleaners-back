// Initializes the `Categorias` service on path `/categorias`
const { Categorias } = require('./categorias.class');
const createModel = require('../../models/categorias.model');
const hooks = require('./categorias.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/categorias', new Categorias(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('categorias');

  service.hooks(hooks);
};
