const express = require('express');
const app = express();
var router = express.Router();
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json')
var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.json())


var models = require('./models');

models.sequelize.sync().then(() => {
  console.log('Nice,Database looks fine')
}).catch(err => {
  console.log(err, 'Something went wrong with database update !')
})



require('./routes/AuthRoutes')(app, router);
require('./routes/DeviceRoutes')(app, router);

var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.listen(process.env.PORT || 3000, () => {
  console.log('Server started !')
});


module.exports = app;