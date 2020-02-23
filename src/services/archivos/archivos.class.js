const { Service } = require('feathers-knex');

exports.Archivos = class Archivos extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'archivos'
    });
  }
};
