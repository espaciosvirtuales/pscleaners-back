const { Service } = require('feathers-knex');

exports.Empleados = class Empleados extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'empleados'
    });
  }
};
