const usuarios = require('./usuarios/usuarios.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(usuarios);
};
