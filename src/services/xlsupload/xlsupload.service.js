// Initializes the `xlsupload` service on path `/xlsupload`
const fileUpload = require('express-fileupload');

const xlsx = require('node-xlsx')

module.exports = function (app) {


  app.use(fileUpload());

  // Initialize our service with any options it requires
  app.use('/xlsupload', (req, res, next) => {
    
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

  

    const ufile = req.files.file

    

    const filename = Math.floor(Date.now() / 1000) + ufile.name

    ufile.mv('./public/xls/' +  filename, function(err) {
      if (err) return res.status(500).send(err);
  
      const workSheetsFromFile = xlsx.parse('./public/xls/' +  filename);


      const arreglo_de_atributos = workSheetsFromFile[0].data[0]
      let valores = workSheetsFromFile[0].data
      valores.shift()



      
      
      let arreglo_de_objetos = []

      for(let valor of valores){

        let objetocontruido = {}
        
        if(valor.length > 0 ){
          for(let index in arreglo_de_atributos){
            objetocontruido[arreglo_de_atributos[index]] = valor[index]
          }
          arreglo_de_objetos.push(objetocontruido)        
        }
        
      }

        
  
      res.send(200, arreglo_de_objetos)
      
    });

    
    
  });

  // Get our initialized service so that we can register hooks
  const service = app.service('xlsupload');
};
