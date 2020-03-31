const { Service } = require('feathers-knex');

exports.Correos = class Correos extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'correos'
    });
  }
};
