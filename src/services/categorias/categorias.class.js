const { Service } = require('feathers-knex');

exports.Categorias = class Categorias extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'categorias'
    });
  }
};
