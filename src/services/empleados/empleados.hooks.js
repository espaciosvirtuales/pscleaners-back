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
        cliente: {
          service: 'usuarios',
          f_key: 'id',
          l_key: 'Empresa',
          one: true,
          query: {
            $select: ['Nombre', 'Direccion', 'Sucursal', 'Contacto', 'Telefono', 'Ciudad', 'Correo', 'Rol']
          }
        },
        archivos: {
          service: 'archivos',
          f_key: 'Empleado_Id',
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
        await context.app.service('archivos').remove(null, {
          query: {
            Empleado_Id: context.id
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
