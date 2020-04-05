const { Service } = require('feathers-knex');

exports.ArchivosOperadores = class ArchivosOperadores extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'archivos_operadores'
    });
  }
};
