const { Service } = require('feathers-knex');

exports.OperadorCliente = class OperadorCliente extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'operador_cliente'
    });
  }
};
