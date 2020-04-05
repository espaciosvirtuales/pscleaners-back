// Initializes the `categoriasOperadores` service on path `/categorias-operadores`
const { CategoriasOperadores } = require('./categorias-operadores.class');
const createModel = require('../../models/categorias-operadores.model');
const hooks = require('./categorias-operadores.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/categorias-operadores', new CategoriasOperadores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('categorias-operadores');

  service.hooks(hooks);
};
