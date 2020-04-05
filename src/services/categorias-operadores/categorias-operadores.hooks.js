const utils = require('../../utils/utils');

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
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [
      async context => {
        // console.log(context.id);
        await context.app.service('archivos-operadores').remove(null, {
          query: {
            Categoria_Id: context.id
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
