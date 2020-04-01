const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [
      // context => {

      //   if (context.params.provider) {

      //     context.forb = true

      //     context.result = {
      //       status: 403,
      //       message: 'not today'
      //     }
      //   }

      // }
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      // context => {
      //   if (context.forb === true) context.result = {
      //     status: 403,
      //     message: 'not today'
      //   }

      //   return context
      // }
    ],
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
    remove: []
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
