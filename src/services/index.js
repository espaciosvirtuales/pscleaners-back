const usuarios = require('./usuarios/usuarios.service.js');
const archivos = require('./archivos/archivos.service.js');
const categorias = require('./categorias/categorias.service.js');
const empleados = require('./empleados/empleados.service.js');
const operadorCliente = require('./operador-cliente/operador-cliente.service.js');
const operadores = require('./operadores/operadores.service.js');
const xlsupload = require('./xlsupload/xlsupload.service.js');
const fileupload = require('./fileupload/fileupload.service.js');
const uploads = require('./uploads/uploads.service.js');
const tokenapi = require('./tokenapi/tokenapi.service.js');
const tokens = require('./tokens/tokens.service.js');
const correos = require('./correos/correos.service.js');
const exportExcel = require('./export-excel/export-excel.service.js');
const archivosOperadores = require('./archivos-operadores/archivos-operadores.service.js');
const categoriasOperadores = require('./categorias-operadores/categorias-operadores.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(usuarios);
  app.configure(archivos);
  app.configure(categorias);
  app.configure(empleados);
  app.configure(operadorCliente);
  app.configure(operadores);
  app.configure(xlsupload);
  app.configure(fileupload);
  app.configure(uploads);
  app.configure(tokenapi);
  app.configure(tokens);
  app.configure(correos);
  app.configure(exportExcel);
  app.configure(archivosOperadores);
  app.configure(categoriasOperadores);
};
