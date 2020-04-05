const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [],
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
        categoria: {
          service: 'categorias-operadores',
          f_key: 'id',
          l_key: 'Categoria_Id',
          one: true,
          query: {
            $select: ['Nombre']
          }
        },
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
