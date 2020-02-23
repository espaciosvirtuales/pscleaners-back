// Initializes the `Operadores` service on path `/operadores`
const { Operadores } = require('./operadores.class');
const createModel = require('../../models/operadores.model');
const hooks = require('./operadores.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/operadores', new Operadores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('operadores');

  service.hooks(hooks);
};
