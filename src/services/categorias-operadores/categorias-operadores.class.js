const { Service } = require('feathers-knex');

exports.CategoriasOperadores = class CategoriasOperadores extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'categorias_operadores'
    });
  }
};
