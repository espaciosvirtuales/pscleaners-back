// Initializes the `uploads` service on path `/uploads`
const fileUpload = require('express-fileupload');

const xlsx = require('node-xlsx')

module.exports = function (app) {



  // Initialize our service with any options it requires
  app.post('/uploads', (req, res, next) => {
    

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }


    const ufile = req.files.file    

    const filename = Math.floor(Date.now() / 1000) + ufile.name

    ufile.mv('./public/files/' +  filename, function(err) {
      if (err) return res.status(500).send(err);

      res.status(200).send({
        'url': './public/files/' +  filename
      })
    });
  });

  // Get our initialized service so that we can register hooks
  const service = app.service('uploads');
};
