// Initializes the `export-excel` service on path `/export-excel`
const { ExportExcel } = require('./export-excel.class');
const hooks = require('./export-excel.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/export-excel', new ExportExcel(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('export-excel');

  service.hooks(hooks);
};
