const { Service } = require('feathers-knex');

exports.Operadores = class Operadores extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'operadores'
    });
  }
};
