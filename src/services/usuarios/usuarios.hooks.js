const utils = require('../../utils/utils');
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [context => utils.isTokenValid(context)],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      populate({
        empleados: {
          service: 'empleados',
          f_key: 'Empresa',
          l_key: 'id',
          query: {
            $select: ['Nombre', 'Sexo', 'Apellido']
          }
        }
      })
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [
      async context => {
        // console.log(context.id);
        await context.app.service('empleados').remove(null, {
          query: {
            Empresa: context.id
          }
        });
        await context.app.service('operador_cliente').remove(null, {
          query: {
            Cliente_Id: context.id
          }
        });
      }
    ]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
