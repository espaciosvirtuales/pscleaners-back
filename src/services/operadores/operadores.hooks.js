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
        archivos: {
          service: 'archivos-operadores',
          f_key: 'Operador_Id',
          l_key: 'id',
          // query: {
          //   $select: ['Ruta', 'Nombre', 'categoria']
          // }
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
        await context.app.service('archivos-operadores').remove(null, {
          query: {
            Operador_Id: context.id
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
