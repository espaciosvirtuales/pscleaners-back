const { Service } = require('feathers-knex');

exports.Usuarios = class Usuarios extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'usuarios'
    });
  }
};
