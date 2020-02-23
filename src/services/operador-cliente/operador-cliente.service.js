// Initializes the `OperadorCliente` service on path `/operador-cliente`
const { OperadorCliente } = require('./operador-cliente.class');
const createModel = require('../../models/operador-cliente.model');
const hooks = require('./operador-cliente.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/operador-cliente', new OperadorCliente(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('operador-cliente');

  service.hooks(hooks);
};
