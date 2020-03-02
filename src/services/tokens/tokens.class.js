const { Service } = require('feathers-knex');

exports.Tokens = class Tokens extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'tokens'
    });
  }
};
