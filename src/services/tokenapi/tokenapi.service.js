// Initializes the `tokenapi` service on path `/tokenapi`
const { Tokenapi } = require('./tokenapi.class');
const hooks = require('./tokenapi.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tokenapi', new Tokenapi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tokenapi');

  service.hooks(hooks);
};
