const { Service } = require('feathers-knex');

exports.Fileupload = class Fileupload extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'fileupload'
    });
  }
};
