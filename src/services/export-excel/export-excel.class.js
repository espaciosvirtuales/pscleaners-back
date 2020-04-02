/* eslint-disable no-unused-vars */
const excel = require('excel4node');

exports.ExportExcel = class ExportExcel {
  constructor(options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find(params) {
    // console.log(params.query)
    const query = {
      FechaCreacion: {
        $gte: params.query.FechaInicial,
        $lte: params.query.FechaFinal
      }
    };
    if (params.query.Nombre !== "") {
      query.Nombre = params.query.Nombre;
    }
    if (params.query.Cliente !== "") {
      query.Empresa = params.query.Cliente;
    }
    // console.log(query);
    let empleados = await this.app.service('empleados').find({ query })
    // console.log(empleados);

    let fileName = ""

    if (empleados.total > 0) {

      const nombre = params.query.Nombre !== "" ? params.query.Nombre : "N/A"
      const cliente = params.query.Cliente !== "" ? empleados[0].cliente.nombre : "Todos"


      const wb = new excel.Workbook();
      const ws = wb.addWorksheet('Sheet 1')

      const style = wb.createStyle({
        font: { bold: true }
      });

      ws.cell(1, 1).string('Busqueda de nombre').style(style)
      ws.cell(2, 1).string(nombre)
      ws.cell(1, 2).string('Cliente').style(style)
      ws.cell(2, 2).string(cliente)
      ws.cell(1, 3).string('Fecha Inicial').style(style)
      ws.cell(2, 3).string(params.query.FechaInicial)
      ws.cell(1, 4).string('Fecha Final').style(style)
      ws.cell(2, 4).string(params.query.FechaFinal)
      // ws.cell(1, 8).formula('=CONCATENAR(A1,CARACTER(10),B1,CARACTER(10),C1,CARACTER(10),D1)')

      ws.cell(4, 1).string('Nombre').style(style)
      ws.cell(4, 2).string('Sexo').style(style)
      ws.cell(4, 3).string('Cliente').style(style)
      ws.cell(4, 4).string('Correo Cliente').style(style)
      ws.cell(4, 5).string('Telefono Cliente').style(style)
      ws.cell(4, 6).string('Archivos').style(style)

      for (let [key, e] of empleados.data.entries()) {
        // console.log(key)
        const newKey = key + 5
        ws.cell(newKey, 1).string(`${e.Nombre} ${e.Apellido}`)
        ws.cell(newKey, 2).string(e.Sexo)
        ws.cell(newKey, 3).string(e.cliente.Nombre)
        ws.cell(newKey, 4).string(e.cliente.Correo)
        ws.cell(newKey, 5).string(e.cliente.Telefono)

        for (let [key2, a] of e.archivos.entries()) {
          ws.cell(newKey, 6 + key2).link(a.Ruta, a.categoria.Nombre)
        }
      }
      fileName = "public/" + Math.floor(Date.now() / 1000) + "Output.xlsx"
      wb.write(fileName);
    }

    console.log(fileName);
    return {
      data: fileName
    };
  }

  async get(id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
};
