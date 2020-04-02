const md5 = require('blueimp-md5')
const jwt = require('jsonwebtoken')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async context => {
        context.data.Contrasenia = md5(context.data.Contrasenia)
        const { NombreUsuario, Contrasenia } = context.data

        console.log("before users")




        let users = await context.app.service('usuarios').find({
          query: {
            NombreUsuario,
            Contrasenia
          }
        })


        console.log("hola");


        if (users.total == 1) {
          context.apr = true

          const payload = {
            check: true,
            ...users.data
          };

          delete users.data[0].Contrasenia;
          delete users.data[0].empleados;



          const token = jwt.sign(payload, '221bbakerstreet', {});
          console.log("hola");
          console.log(token);



          context.token = token

          await context.app.service('tokens').create({
            token: token,
            userid: users.data[0].id
          })

        }
        else {
          context.apr = false
        }
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [context => {

      if (context.apr === false) {



        context.result = {
          status: 403,
          message: 'user not found'
        }

      }

      if (context.apr === true) {
        context.result = {
          status: 200,
          message: 'user logged',
          token: context.token
        }
      }

      return context
    }],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
