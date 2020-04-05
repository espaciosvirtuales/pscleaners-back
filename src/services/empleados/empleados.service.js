// Initializes the `Empleados` service on path `/empleados`
const { Empleados } = require('./empleados.class');
const createModel = require('../../models/empleados.model');
const hooks = require('./empleados.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/empleados', new Empleados(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('empleados');

  service.hooks(hooks);
};
