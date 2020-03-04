

module.exports = {
  before: {
    all: [
    //   context => {
    
    //   if(context.params.provider){

    //     context.forb = true

    //     context.result = {
    //       status : 403,
    //       message: 'not today'
    //     }
    //   } 
      
    // }
  ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
    //   context => {
    //   if(context.forb === true) context.result = {
    //     status : 403,
    //       message: 'not today'
    //   }

    //   return context
    // }
  ],
    find: [],
    get: [],
    create: [],
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
